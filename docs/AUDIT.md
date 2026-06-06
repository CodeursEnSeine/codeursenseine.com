# AUDIT TECHNIQUE & SÉCURITÉ — codeursenseine.com

> Date de l'audit : 2026-06-06 · Branche : `tmp/audit` · Périmètre : code du dépôt à l'état `master` (commit `a85ef5c`).
> Objectif : rendre le site **plus sûr, plus sain et plus attractif** sans refonte graphique. Les actions sont priorisées dans `docs/PLAN.md`.

## Synthèse exécutive

Le site est une application **Next.js 14 / Contentlayer** quasi-statique, simple et bien découpée. Pas de backend ni de données utilisateurs stockées côté serveur → **surface d'attaque réduite**. Les risques sont donc surtout : dépendances vulnérables, en-têtes de sécurité incomplets, conformité RGPD imparfaite, absence de filet de sécurité (tests/CI), et quelques bugs/contenus périmés qui nuisent à l'image.

**Cotation globale : correcte, mais fragile sur la maintenance.** Aucune faille critique exploitable à distance n'a été identifiée dans le code applicatif. Les priorités sont la **chaîne de dépendances** et la **mise en place d'un filet (CI + tests + en-têtes)**.

| Sévérité | Nombre | Exemples |
|---|---|---|
| 🔴 Haute | 4 | Dépendances vulnérables (23 avis npm), en-têtes de sécurité incomplets, incohérence RGPD newsletter, absence de CI/tests |
| 🟠 Moyenne | 6 | Contenu d'inscription périmé (2025), redirection home côté client, `rel` cassé (tabnabbing), absence de sitemap, secrets/process à cadrer, Next mineur en retard |
| 🟡 Basse | 8 | Typos de code, `target=_blank` sans `rel`, `tsconfig target es5`, parse localStorage sans garde, poids des images, deps majeures en retard, `X-XSS-Protection` obsolète, accessibilité à valider |

---

## 1. 🔴 Sécurité des dépendances

`npm audit` remonte **23 vulnérabilités (1 critique, 6 hautes, 16 modérées)**.

- La majorité sont **transitives** et proviennent de la chaîne `contentlayer2` / `next-contentlayer2` (qui embarque des versions anciennes de `glob`, `brace-expansion`, `flatted`, `yaml`, `ajv`, `protobufjs`…).
- `next@14.2.33` installé alors que `14.2.35` est dispo (correctifs de sécurité de la branche 14.2.x).

**Constat** : la plupart se corrigent avec `npm audit fix` (non cassant) ; certaines nécessitent une montée de version de Contentlayer ou un `--force`.

**Recommandations**
1. `npm audit fix` puis revérifier (`npm audit`). Mesurer le reste.
2. Monter Next sur le dernier patch 14.2.x : `npm i next@14.2.x eslint-config-next@14.2.x`.
3. **Activer un Dependabot/Renovate versionné dans le dépôt** (`.github/dependabot.yml`). Des branches Dependabot existent déjà côté GitHub mais aucune config n'est committée → la rendre explicite et groupée.
4. Surveiller Contentlayer2 : projet à la maintenance irrégulière. Documenter une **stratégie de sortie** si abandon (ADR à créer le moment venu). Voir `docs/PLAN.md`.

## 2. 🔴 En-têtes HTTP de sécurité (`netlify.toml`)

Actuellement :
```toml
Content-Security-Policy = "frame-ancestors 'none'"
X-Content-Type-Options = "nosniff"
X-Frame-Options = "DENY"
X-XSS-Protection = "1; mode=block"
```

**Manques / problèmes**
- **CSP minimaliste** : seul `frame-ancestors` est défini. Pas de `default-src`/`script-src`/`style-src`/`img-src`. Une vraie CSP réduit fortement l'impact d'une injection. À calibrer car le site charge des scripts tiers (TropEvent, Mailchimp, images `pbs.twimg.com`).
- **`Strict-Transport-Security` (HSTS) absent** → à ajouter (`max-age=63072000; includeSubDomains; preload`).
- **`Referrer-Policy` absent** → `strict-origin-when-cross-origin`.
- **`Permissions-Policy` absent** → désactiver caméra/micro/géoloc par défaut.
- **`X-XSS-Protection` est obsolète** (déprécié par les navigateurs, peut introduire des bugs) → à retirer au profit d'une CSP.

**Recommandation** : enrichir le bloc `[[headers]]` (proposition de valeurs dans `docs/PLAN.md`, quick win #2). Tester ensuite avec https://securityheaders.com et https://observatory.mozilla.org.

## 3. 🔴 Conformité RGPD

- **Incohérence majeure** : `src/app/(legal)/confidentialite/page.tsx` indique que la newsletter passe par **Brevo (Sendinblue)**, alors que `src/components/Newsletter/index.tsx` poste vers **Mailchimp** (`codeursenseine.us16.list-manage.com`). C'est une **non-conformité documentaire** : la politique affichée ne décrit pas le traitement réel.
  - De plus, Mailchimp `us16` = serveurs **US** → transfert hors UE à mentionner (clauses contractuelles types / DPF).
  - **Action** : décider de l'outil cible (Brevo recommandé, hébergement UE) puis aligner code **et** page de confidentialité. Voir `docs/PLAN.md`.
- **Pas de bannière cookies** : la page affirme « aucun cookie ni traceur ». À **vérifier réellement** — les widgets tiers (TropEvent, Mailchimp embarqué) peuvent déposer des cookies. Si oui, bannière de consentement requise.
- **Mentions légales** : présentes (`/mentions-legales`) — à relire pour exactitude (éditeur, hébergeur Netlify, contact).

## 4. 🔴 Absence de filet de sécurité (qualité)

- **Aucun test** (`*.test.*`, `*.spec.*` introuvables).
- **Aucune CI** (`.github/workflows` absent). Rien ne vérifie lint/build/typecheck avant déploiement → une PR cassée peut être mergée et casser la prod.
- **Recommandation** : ajouter un workflow GitHub Actions minimal (install → lint → typecheck → build) sur PR et `master` (proposé dans `docs/PLAN.md` + fichier prêt à committer). Plus tard : tests de composants (Vitest + Testing Library) et tests e2e (Playwright) sur les parcours clés (programme, inscription, newsletter).

## 5. 🟠 Contenu périmé / bugs visibles (impact image)

- **Inscription périmée** : `src/components/InscriptionTropEvent/index.tsx` pointe encore vers l'événement **`2025-Codeurs-en-Seine-2025`** alors que la page d'inscription annonce **le 19 novembre 2026**. Un visiteur 2026 verrait/utiliserait le formulaire 2025. **À corriger en priorité** (externaliser l'ID d'événement en constante/env).
- **Cache-buster non déterministe** : ce même composant injecte `?update=${new Date().toISOString()}` dans l'URL du script → empêche tout cache du script tiers à chaque rendu et peut générer des incohérences. Préférer une version figée (ex. `?v=2026`).
- **Redirection home côté client** : `src/app/page.tsx` redirige vers `/2026` via `useEffect` + `router.replace`. Conséquences : mauvais pour le SEO, flash de page vide, inutilisable sans JS. **Remplacer par une redirection serveur** (`redirect()` de `next/navigation`) ou une règle de redirection Next/Netlify.
- **Typo `align="star"`** dans `src/app/2026/programme/[slug]/page.tsx:41` (devrait être `start`) → prop Chakra invalide silencieuse.
- **`rel` cassé (tabnabbing)** : `src/components/PageHeader/PageHeader.js:56` contient `rel="nopener norefferer"` (fautes) → la protection anti-tabnabbing est **inopérante** sur ce lien `target="_blank"`.

## 6. 🟠 SEO / découvrabilité

- **Pas de `sitemap.xml`** et `public/robots.txt` ne contient **pas de directive `Sitemap:`**. Pour un site événementiel, c'est une perte de visibilité. Next App Router génère nativement un sitemap via `src/app/sitemap.ts` (itérer sur `allTalks`, `allMeetups`, pages statiques).
- Métadonnées OpenGraph présentes au niveau racine ✅ mais à vérifier par page (programme/[slug], speakers) pour de belles previews de partage social.
- Données structurées **Schema.org `Event`** absentes → fort levier pour la conférence/meetups (rich results Google, agrégateurs).

## 7. 🟠 Process & secrets

- `.env` n'est **pas tracké** par git ✅ (bien). Il ne contient que `NEXT_PUBLIC_BASE_URL` (donnée publique). Aucun secret committé détecté.
- Les **secrets réels** (clés Netlify, API réseaux sociaux à venir, TropEvent, Mailchimp/Brevo) doivent vivre dans : variables d'env Netlify + un **coffre partagé** (Bitwarden/1Password) documenté dans `CONTEXT.md`. Aujourd'hui non formalisé → risque de perte de continuité quand un membre part.
- **Rotation** : prévoir une procédure de rotation des accès lors des départs/arrivées (les nouveaux membres arrivent — moment idéal pour cadrer).

## 8. 🟡 Qualité de code & DX

- **`tsconfig` `target: "es5"`** → transpilation inutilement lourde pour des navigateurs modernes. Passer à `es2020`/`es2022` (bundles plus légers, meilleures perfs).
- **`Favorite.getFavorites`** fait `JSON.parse(localStorage…)` **sans try/catch** → un localStorage corrompu casse le composant. Encadrer.
- **`target="_blank"` sans `rel`** sur plusieurs liens (sponsors, newsletter, NavSocial, kit-de-presse). Les navigateurs modernes ajoutent `noopener` par défaut, mais l'explicite reste recommandé. Centraliser via un composant `ExternalLink`.
- **Mélange `.js`/`.tsx`** dans `components/Nav` et `PageHeader` (perte de typage). Migrer progressivement en `.tsx`.
- **`_tools/`** : scripts utiles mais hors build, `package.json` non tracké (apparaît dans `git status`). Le committer ou l'ignorer explicitement.
- **Poids des assets** : `public/` = **22 Mo / 225 fichiers**. Auditer les images lourdes (logos sponsors, photos speakers), normaliser en WebP/AVIF, vérifier qu'on passe bien par `next/image`.

## 9. 🟡 Accessibilité (a11y) — à valider

- `lang="fr"` présent ✅.
- À vérifier systématiquement : `alt` sur toutes les images de contenu, contrastes (thème GTA récent), focus visibles, navigation clavier de la `Nav` mobile (drawer), libellés de formulaires (newsletter : l'`Input` email n'a pas de `<label>` associé, juste un `placeholder`).
- **Recommandation** : passer Lighthouse / axe DevTools sur les pages clés et intégrer un check a11y en CI (ex. `@axe-core/playwright`).

## 10. Points positifs (à conserver)

- Architecture claire, contenu découplé en MDX, typage Contentlayer solide.
- Validation d'env au build (zod) — bonne pratique.
- En-têtes anti-framing déjà présents.
- Conventional commits et guidelines de contribution en place.
- Pas de backend = peu de surface d'attaque, coût d'hébergement quasi nul.
- Stratégie d'archivage annuel propre (même si manuelle).

---

## Annexe — Tableau de bord des findings

| # | Sévérité | Domaine | Fichier / Zone | Action |
|---|---|---|---|---|
| F1 | 🔴 | Deps | `package-lock.json` | `npm audit fix`, monter Next, Dependabot committé |
| F2 | 🔴 | Headers | `netlify.toml` | CSP complète, HSTS, Referrer/Permissions-Policy, retirer XSS |
| F3 | 🔴 | RGPD | `(legal)/confidentialite`, `Newsletter` | Aligner outil newsletter ↔ politique |
| F4 | 🔴 | Qualité | (absent) | CI GitHub Actions + tests |
| F5 | 🟠 | Contenu | `InscriptionTropEvent` | Mettre l'événement 2026, figer le cache-buster |
| F6 | 🟠 | Perf/SEO | `app/page.tsx` | Redirection serveur au lieu de `useEffect` |
| F7 | 🟠 | Sécurité | `PageHeader.js:56` | Corriger `rel="noopener noreferrer"` |
| F8 | 🟠 | SEO | `app/sitemap.ts`, `robots.txt` | Générer sitemap + directive |
| F9 | 🟠 | Process | hors dépôt | Coffre secrets + rotation |
| F10 | 🟡 | Bug | `programme/[slug]/page.tsx:41` | `align="start"` |
| F11 | 🟡 | DX | `tsconfig.json` | `target: es2020+` |
| F12 | 🟡 | Robustesse | `services/Favorite.ts` | try/catch parse |
| F13 | 🟡 | Perf | `public/` | Optimiser images |
| F14 | 🟡 | a11y | global | Label newsletter, Lighthouse/axe |
