# CLAUDE.md — Instructions projet (Codeurs en Seine)

Contexte technique complet : voir **`docs/CONTEXT.md`**. Décisions d'archi : **`docs/adr/`**. Audit & feuille de route : **`docs/AUDIT.md`**, **`docs/PLAN.md`**.

## Ce qu'est ce dépôt
Site web public **statique** de l'association Codeurs en Seine : **Next.js 14 (App Router) + Contentlayer2 (MDX) + Chakra UI**, déployé sur **Netlify**. Pas de backend, pas de base de données, pas d'auth. Le contenu vit en MDX dans `content/`.

## Règles de contribution
- **Commits** : conventional commits `type(scope): description`, atomiques (1 commit = 1 intention). Ne pas ajouter de `Co-Authored-By`.
- **Langue** : tout le contenu et l'UI sont en **français** (avec accents corrects). `lang="fr"`.
- **Paquets** : **npm uniquement** (`only-allow npm`). Ne pas générer de `yarn.lock`/`pnpm-lock.yaml`.
- **Avant de proposer un changement de config** (Netlify, build, headers, CSP) : vérifier la compatibilité et tracer les effets de bord (tiers TropEvent/Mailchimp, cache, CSP).

## Commandes
- `npm run dev` — dev (Next + Contentlayer en watch).
- `npm run build` — build content puis Next.
- `npm run lint` — `next lint` + `tsc --noEmit`. **Lance-le avant de committer.**
- `npm run pretty` — Prettier.
- Pas de tests automatisés à ce jour (cf. `docs/PLAN.md` P1-3).

## Modèle de contenu (source de vérité : `contentlayer.config.ts`)
- Ajouter/modifier un **meetup** → fichier dans `content/meetups/AAAA-MM-JJ-meetup.mdx`. Voir skill `/new-meetup`.
- Ajouter un **sponsor** → `content/sponsors/<slug>.mdx` + logo dans `public/images/sponsors/`. Voir skill `/new-sponsor`.
- Ajouter un **speaker** → `content/speakers/<slug>.mdx` + photo dans `public/images/speakers/`.
- Un **talk** : le **nom de fichier = slug = URL** (impact SEO) → ne pas le renommer après publication.

## Pièges connus (cf. `docs/AUDIT.md`)
- `currentYear` est codé en dur dans `src/constants/site.ts` — édité à chaque édition.
- L'archivage annuel est **manuel** : voir skill `/archive-year` et le README.
- Incohérence newsletter (Mailchimp dans le code vs Brevo en page confidentialité) : ne pas l'aggraver, voir QW-7.
- En-têtes de sécurité dans `netlify.toml` : toute modif de CSP doit être testée contre les tiers.

## Garde-fous
- Ne pas committer de secrets (`.env` n'est pas tracké — le garder ainsi).
- Ne pas introduire de backend/auth dans ce dépôt : cela relève de l'**admin séparée** (ADR-0003).
- Avant toute opération git destructive (force push, reset), demander.
