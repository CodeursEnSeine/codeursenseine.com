# PLAN — Amélioration de codeursenseine.com

> Compagnon de `docs/AUDIT.md`. Trois horizons : **Phase 0** (quick wins, jours), **Phase 1** (consolidation, semaines), **Phase 2** (plateforme d'administration & app attendees, mois).
> Principe directeur (demandé par l'association) : **partir sur des bases saines avant de construire le gros œuvre.**

---

## Phase 0 — Quick wins (faible effort, fort impact)

À faire avant toute nouvelle fonctionnalité. Chacun est petit, isolé, et mergeable séparément (un commit = une intention).

### QW-1 — Corriger les dépendances vulnérables
```bash
npm audit fix
npm i next@^14.2.35 eslint-config-next@^14.2.35
npm audit            # mesurer le reste
npm run build        # vérifier non-régression
```

### QW-2 — Durcir les en-têtes HTTP (`netlify.toml`)
Remplacer le bloc `[[headers]]` par (à ajuster après test des tiers TropEvent/Mailchimp) :
```toml
[[headers]]
for = "/*"
[headers.values]
Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
X-Content-Type-Options = "nosniff"
X-Frame-Options = "DENY"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "camera=(), microphone=(), geolocation=()"
Content-Security-Policy = "default-src 'self'; img-src 'self' data: https://pbs.twimg.com https://*.mailchimp.com; script-src 'self' 'unsafe-inline' https://www.tropevent.com; style-src 'self' 'unsafe-inline'; frame-src https://www.tropevent.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://codeursenseine.us16.list-manage.com"
```
> ⚠️ Vérifier l'embed TropEvent et le form Mailchimp après mise en place (la CSP peut casser un tiers mal listé). Tester sur securityheaders.com.

### QW-3 — Inscription : pointer sur l'événement 2026
- Externaliser l'ID TropEvent dans `src/constants/site.ts` (ex. `tropEventSlug`) au lieu du `2025-Codeurs-en-Seine-2025` codé en dur.
- Remplacer `?update=${new Date().toISOString()}` par une version figée (`?v=2026`).

### QW-4 — Redirection home côté serveur
`src/app/page.tsx` :
```tsx
import { redirect } from 'next/navigation';
import { currentYear } from '@/constants/site';
export default function Index() {
  redirect(`/${currentYear}`);
}
```

### QW-5 — Corriger les bugs ponctuels
- `PageHeader.js:56` → `rel="noopener noreferrer"`.
- `programme/[slug]/page.tsx:41` → `align="start"`.
- `services/Favorite.ts` → entourer `JSON.parse` d'un try/catch (retourner `[]` si corrompu).

### QW-6 — SEO : sitemap + robots
- Créer `src/app/sitemap.ts` itérant sur `allTalks`, `allMeetups` + pages statiques.
- Ajouter `Sitemap: https://codeursenseine.com/sitemap.xml` dans `public/robots.txt`.

### QW-7 — RGPD : aligner la newsletter
Décision à prendre (cf. ADR à venir) : **Brevo** (UE, recommandé) ou rester Mailchimp.
- Si Brevo : remplacer le form, **et** garder la page confidentialité.
- Si Mailchimp : corriger la page confidentialité (Mailchimp, transfert US/DPF) + bannière cookies si dépôt de cookies.

### QW-8 — Mise en place CI
Committer `.github/workflows/ci.yml` (fourni ci-dessous, §Phase 1).

**Sortie de Phase 0** : score securityheaders « A », `npm audit` propre, CI verte, contenu d'inscription à jour. Fermer la branche `tmp/audit` par une PR.

---

## Phase 1 — Consolidation (bases saines)

### P1-1 — CI/CD GitHub Actions
`.github/workflows/ci.yml` :
```yaml
name: CI
on:
  pull_request:
  push:
    branches: [master]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm run build
        env:
          NEXT_PUBLIC_BASE_URL: https://codeursenseine.com
```

### P1-2 — Dependabot committé
`.github/dependabot.yml` (groupé pour limiter le bruit) :
```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule: { interval: weekly }
    groups:
      dev-dependencies: { dependency-type: development }
      production: { dependency-type: production }
  - package-ecosystem: github-actions
    directory: "/"
    schedule: { interval: weekly }
```

### P1-3 — Tests minimaux
- **Unitaires/Composants** : Vitest + Testing Library sur `Favorite`, `MeetupRegistration`, rendu du programme.
- **E2E** : Playwright sur 3 parcours : page d'accueil → programme, ouverture d'un talk, soumission newsletter (mock), affichage inscription.
- Brancher en CI (`P1-1`).

### P1-4 — Hygiène code
- `tsconfig` `target: es2020`.
- Migrer les `.js` restants (`Nav/*.js`, `PageHeader/*.js`) en `.tsx`.
- Composant `ExternalLink` centralisant `target/rel`.
- Auditer & optimiser `public/` (WebP/AVIF, `next/image`).

### P1-5 — Données structurées & a11y
- Schema.org `Event` (JSON-LD) sur conférence + meetups.
- Passe Lighthouse/axe, corriger labels de formulaire et contrastes.

### P1-6 — Outiller le rituel annuel
Transformer la procédure manuelle du README en **script + skill Claude** (`.claude/skills/archive-year`, `.claude/skills/new-meetup`). Réduit le risque d'erreur et la dépendance à une seule personne.

---

## Phase 2 — Plateforme d'administration & expérience attendees

> Objectif : un espace privé pour les organisateurs couvrant le cycle **sponsors + événements + communication + suivi**, plus une expérience attendees (programme live, notifications).

### 2.A — Principe d'architecture : NE PAS tout mélanger

Le site public actuel est statique, sans backend ni auth — c'est une **force** (sécurité, coût, robustesse). **Ne pas y greffer l'admin.** Recommandation :

- **Garder le site public en Next.js statique** (inchangé), il consomme éventuellement des données publiées par l'admin.
- **Construire l'admin comme une application séparée** (sous-domaine `admin.codeursenseine.com`), avec sa propre base de données, authentification, et rôles.
- Le site public peut, à terme, lire le contenu depuis l'admin (API/export) au lieu des MDX, mais **ce n'est pas un prérequis** — on peut commencer par publier en MDX/PR depuis l'admin.

### 2.B — Choix de techno pour l'admin (réponse à la question SvelteKit ?)

L'ADR `docs/adr/0003-plateforme-admin-techno.md` détaille la comparaison. Résumé :

| Option | Pour | Contre |
|---|---|---|
| **Next.js (rester)** | Une seule stack, équipe déjà dessus, Server Actions/auth matures, écosystème | Un peu verbeux pour du CRUD |
| **SvelteKit** | DX agréable, léger, form actions élégantes | Nouvelle stack à maintenir par des bénévoles, écosystème auth/admin moins fourni |
| **Outil low-code/admin** (Directus, Appwrite, Supabase + Refine/AdminJS) | Très rapide pour le CRUD sponsors/contacts, auth & rôles fournis, moins de code à maintenir | Moins sur-mesure pour les workflows complexes (publication multi-réseaux) |

**Recommandation** : pour une équipe **bénévole à turnover**, minimiser la diversité technologique et le code maison. Deux scénarios sains :
1. **Pragmatique (recommandé)** : **Supabase** (Postgres + Auth + Row Level Security + Storage) en backend, **Next.js** en front admin (même stack que le site → un seul écosystème à connaître). Le CRUD et les workflows sont du code TS partagé.
2. **Si l'envie SvelteKit est forte** : SvelteKit + Supabase. Techniquement très bien, mais **accepter le coût** d'une 2ᵉ stack à transmettre aux futurs membres. À ne choisir que si un·e mainteneur·e porte ce choix dans la durée.

> Critère décisif = **pérennité bénévole**, pas la préférence techno du moment. Voir ADR-0003.

### 2.C — Périmètre fonctionnel (découpé en modules livrables)

**Module 1 — CRM Sponsors & workflow d'acquisition**
- Entités : Sponsor, Contact, Interaction, Convention, Paiement, Asset (logo/visuel).
- Workflow (machine à états) : `À contacter → Contacté → En discussion → Accord verbal → Convention envoyée → Signée → Contresignée → Renvoyée → Paiement reçu → Assets reçus → Publié sur le site/com`.
- Pour chaque sponsor : qui contacte, quand, quelle réponse, relances, échéances, montant, niveau (bronze→platinium).
- Sortie : génération automatique de la fiche MDX sponsor (PR sur ce dépôt) une fois « Publié ».

**Module 2 — Gestion des événements (meetups + conférence)**
- Recherche/réservation de **salle**, choix de **date**, gestion des **speakers** (du sourcing au confirmé), CFP.
- Checklist par événement avec jalons.

**Module 3 — Planification & publication des communications**
- Calendrier éditorial avec jalons standardisés : **S-1, J-3, J-1, J, J+1 (remerciements)**.
- Génération des **visuels** (gabarits) — voir 2.D.
- **Publication multi-réseaux** : X/Twitter, Instagram, Facebook, LinkedIn, Bluesky, TikTok, YouTube, Twitch, Meetup.com.
  - Réalité technique : **toutes ces plateformes n'ont pas d'API de publication ouverte/gratuite**. Stratégie réaliste :
    - **API natives** quand elles existent et sont accessibles (LinkedIn, Facebook/Instagram via Meta Graph, Bluesky AT Protocol, YouTube/Twitch, Mastodon).
    - **Agrégateur** (Buffer/Metricool/Postiz open-source) pour le reste → on planifie depuis l'admin via l'agrégateur.
    - **File d'attente + rappels manuels** pour les réseaux sans API (TikTok publication, stories Insta) : l'outil prépare le contenu + visuel et notifie l'organisateur de poster.
  - Voir ADR-0005 (à créer) pour l'architecture de publication.

**Module 4 — Suivi compta & prestataires**
- Suivi des prestataires (devis, factures, échéances, paiements), inscriptions (import TropEvent), budget événement. Export comptable. **Pas de manipulation de paiement** dans l'app (rester sur TropEvent/banque) → moins de risque/conformité.

**Module 5 — Espace organisateur (tableau de bord)**
- Vue consolidée : prochain meetup, état des sponsors, jalons com à venir, tâches.

### 2.D — Génération de visuels

- Gabarits **Figma** (un MCP Figma est disponible dans cet environnement) ou templates HTML→image (Satori/`@vercel/og`) versionnés.
- L'admin pré-remplit titre/date/speakers/sponsors → génère les visuels aux bons formats (carré, story, bannière).

### 2.E — Expérience attendees (réponse : app mobile dédiée ?)

L'ADR `docs/adr/0004-experience-attendees-pwa.md` détaille. Résumé de la recommandation :

- **NE PAS partir sur une app native iOS/Android dédiée** pour commencer : coût de dev + stores + maintenance disproportionné pour un événement annuel + meetups, pour des bénévoles.
- **Recommandation : PWA** (Progressive Web App) intégrée au site / à l'admin :
  - Programme consultable hors-ligne, **favoris** (déjà amorcés via localStorage → à faire évoluer), plan des salles, infos pratiques.
  - **Notifications push Web** (J-1, changement de salle, « ça commence dans 10 min ») via Web Push — fonctionne sur Android et iOS 16.4+.
  - Installable (« ajouter à l'écran d'accueil »), pas de store, une seule base de code.
- **Live/temps réel** (changement de salle, annonces) : flux de données léger (Supabase Realtime ou simple polling d'un JSON publié). Pas besoin d'infra lourde.
- Réévaluer une app native **uniquement si** un besoin natif fort émerge (badge NFC, scan, géofencing salle).

### 2.F — Connaissance interne (Slack / Notion)

Demande : « te pluguer sur les canaux pour enrichir ta connaissance ».
- **MCP (Model Context Protocol)** : on peut connecter Claude Code à **Slack** et **Notion** via leurs serveurs MCP respectifs pour que l'assistant lise le mode de fonctionnement réel de l'asso et propose des améliorations contextualisées.
- **Démarche recommandée (cadrée)** :
  1. Centraliser la doc « comment on fonctionne » dans **un** espace (Notion) ; ce dépôt garde `CONTEXT.md`/ADR comme source technique.
  2. Connecter les MCP **en lecture** d'abord (Slack channels pertinents, base Notion) — voir `.claude/README-mcp.md`.
  3. Définir ce qui est confidentiel (RGPD : un Slack peut contenir des données perso) → ne pas tout exposer.
- **Attention** : un assistant branché sur Slack/Notion peut lire des données sensibles → cadrer les canaux, anonymiser, et garder l'humain dans la boucle.

---

## Ordonnancement recommandé

```
Semaine 1-2   : Phase 0 (QW-1 → QW-8)  ──► PR depuis tmp/audit
Semaine 3-6   : Phase 1 (CI, tests, hygiène, SEO/a11y, outillage annuel)
Mois 2-3      : Phase 2 cadrage (ADR 0003/0004/0005 validés, choix techno, schéma DB, maquettes)
Mois 3+       : Phase 2 Module 1 (CRM sponsors) puis Module 3 (com), itératif
```

## Indicateurs de réussite

- securityheaders.com : note ≥ A.
- `npm audit` : 0 vuln. haute/critique.
- CI verte obligatoire avant merge.
- Lighthouse ≥ 90 (Perf/SEO/a11y) sur pages clés.
- Réduction du temps d'onboarding d'un nouveau membre (mesure subjective via `CONTEXT.md`/ADR).
- Phase 2 : 1 workflow sponsor géré de bout en bout dans l'outil.
