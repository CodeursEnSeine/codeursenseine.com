# CONTEXT — Codeurs en Seine

> Document de référence pour comprendre **comment fonctionne le projet et pourquoi**.
> Destiné à la fois aux nouveaux membres de l'association et aux assistants IA (Claude Code).
> Tenir ce fichier à jour : c'est la source de vérité « haut niveau » du dépôt.

---

## 1. Qu'est-ce que Codeurs en Seine ?

- **Association** organisant des événements autour du développement logiciel à Rouen (Normandie).
- Deux formats récurrents :
  - **Meetups mensuels** (gratuits, soirées, format court).
  - **Conférence annuelle** « Codeurs en Seine » (1 journée, plusieurs salles, speakers, sponsors). Édition 2026 : **19 novembre 2026, Kindarena de Rouen**.
- Ce dépôt = **le site web public** `codeursenseine.com`.

## 2. Stack technique (état actuel)

| Domaine | Choix | Version |
|---|---|---|
| Framework | **Next.js** (App Router) | 14.2.33 |
| UI | **Chakra UI** | 2.10.x |
| Contenu | **Contentlayer2** (MDX → types TS) | 0.5.8 |
| Langage | TypeScript | 5.8 |
| Rendu | React | 18.3 |
| Images | `next/image` + Sharp | 0.34 |
| Hébergement | **Netlify** | — |
| Newsletter | Mailchimp (form embarqué) | — |
| Inscriptions conférence | **TropEvent** (widget embarqué) | — |
| Build content | Contentlayer génère `.contentlayer/generated` | — |

**Nature du site** : quasi-statique. Pas de base de données, pas d'API backend, pas d'authentification. Tout le contenu vit en **fichiers MDX** dans `content/`. Les seules interactions dynamiques sont : favoris du programme (localStorage côté client), formulaire newsletter (POST vers Mailchimp), widget d'inscription (iframe/script TropEvent).

## 3. Architecture du dépôt

```
content/              ← SOURCE DE VÉRITÉ du contenu (MDX)
  meetups/            ← 1 fichier = 1 meetup
  speakers/           ← fiches intervenants conférence
  talks/              ← fiches conférences/talks (programme)
  sponsors/           ← fiches sponsors (+ niveau: bronze/silver/gold/platinium)
  organisers/         ← membres organisateurs
  associations/       ← associations partenaires
  templates/          ← gabarits MDX de référence

src/
  app/                ← routes Next.js (App Router)
    2026/             ← site de l'édition courante (programme, speakers, sponsors, infos, inscription…)
    meetups/          ← section meetups
    (legal)/          ← mentions légales + confidentialité
    layout.tsx        ← layout racine (<html lang="fr">)
  components/         ← composants UI (Nav, Card, Sponsors, Meetup, Programme…)
  constants/site.ts   ← currentYear + pastYears (⚠️ à éditer chaque année)
  contexts/           ← FavoritesContext (favoris programme)
  services/Favorite.ts← persistance favoris (localStorage)
  themes/             ← thèmes Chakra (ces / meetups / devoxx4kids)
  renderers/mdx.tsx   ← mapping balises MDX → composants Chakra

contentlayer.config.ts ← SCHÉMA des contenus (types, champs, computedFields)
netlify.toml           ← redirections années archivées + en-têtes HTTP
public-archive/        ← sorties statiques des éditions archivées
_tools/                ← scripts ponctuels (init speakers, slugify, types MDX)
```

## 4. Modèle de contenu (défini dans `contentlayer.config.ts`)

- **Sponsor** : `name`, `logo`, `link`, `isMeetupSponsor`, `sponsor` (niveau). `disabled` = masqué.
- **Speaker** : `name`, `slug`, `image`, réseaux sociaux (twitter/bluesky/instagram/youtube/tiktok/github/linkedin), `company`. Les `*Href` sont calculés.
- **Talk** : `kind` (pause/keynote/quicky/conference/atelier/pleniere/sponsor), `title`, `start`/`end`, `room` (A–D), `speakers[]`. `slug` calculé depuis le nom de fichier (→ **le nom de fichier impacte l'URL et le SEO**).
- **Meetup** : `slug`, `published`, `title`, `canceled`, `excerpt`, `meetup_date`, horaires, `meetup_location`, `meetup_register_link`.
- **Organiser** : `name`, `image`, réseaux, `active`.

## 5. Cycle de vie annuel (rituel important)

À chaque nouvelle édition (voir `README.md` pour la procédure complète) :
1. **Archiver** l'année écoulée : tag git `archive-XXXX`, build statique → `public-archive/`, déploiement Netlify dédié, redirection dans `netlify.toml`.
2. **Réinitialiser** : changer `currentYear` dans `src/constants/site.ts`, renommer le dossier `src/app/<année>`, vider/mettre à jour le contenu, ajouter l'année dans la nav.

> ⚠️ Ce processus est **manuel et répétitif** → candidat n°1 à l'outillage (voir `docs/PLAN.md` et la skill `archive-year`).

## 6. Déploiement

- Push sur `master` → build & déploiement Netlify automatique.
- Validation des variables d'env au build via `.env.validator.js` (zod). Seule var requise : `NEXT_PUBLIC_BASE_URL`.
- En-têtes HTTP de sécurité définis dans `netlify.toml` (voir `docs/AUDIT.md` pour les manques).

## 7. Conventions

- **Commits** : conventional commits (`type(scope): description`), atomiques.
- **Langue** : contenu et UI en français. `lang="fr"`.
- **Lint** : `npm run lint` (next lint + `tsc --noEmit`). **Pas de tests automatisés** à ce jour.
- **Gestionnaire de paquets** : npm imposé (`only-allow npm`).

## 8. Services & comptes externes (à cartographier dans un coffre partagé)

| Service | Usage | Où c'est branché |
|---|---|---|
| Netlify | Hébergement site + archives | `netlify.toml` |
| Mailchimp (`us16.list-manage.com`) | Newsletter | `src/components/Newsletter` |
| TropEvent | Billetterie / inscriptions | `src/components/InscriptionTropEvent` |
| Réseaux sociaux | Communication | liens dans `NavSocial`, fiches |

> ⚠️ Incohérence connue : la page **confidentialité** mentionne **Brevo** alors que le code utilise **Mailchimp**. Voir `docs/AUDIT.md` §RGPD.

## 9. Hors-périmètre actuel (cible Phase 2)

Espace d'**administration** pour les organisateurs (gestion sponsors, planification & publication des communications réseaux sociaux, suivi inscriptions/compta, recherche salle/date/speaker, app mobile attendees). Voir `docs/PLAN.md` et les ADR `0003`/`0004`.

## 10. Liens utiles (à compléter par l'association)

- Production : https://codeursenseine.com
- Netlify (archives) : https://app.netlify.com/projects/archives-codeurs-en-seine
- Slack interne : _(à documenter)_
- Notion (docs nouveaux membres) : _(à documenter)_
- Coffre de secrets / mots de passe partagés : _(à documenter — voir AUDIT §Secrets)_
