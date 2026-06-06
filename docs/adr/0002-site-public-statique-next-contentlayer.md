# ADR-0002 — Site public : génération statique Next.js + Contentlayer/MDX

- **Statut** : accepté (documente l'existant)
- **Date** : 2026-06-06 (décision historique, formalisée a posteriori)
- **Décideurs** : équipe technique Codeurs en Seine

## Contexte
Le site public doit présenter chaque édition (programme, speakers, sponsors, infos), gérer des **meetups mensuels**, et **archiver** chaque année. Contraintes : maintenu par des bénévoles, budget quasi nul, pas de données utilisateurs à stocker côté serveur, contenu rédigé par plusieurs personnes.

## Options envisagées
1. **CMS hébergé (WordPress/headless)** — admin clé en main mais hébergement à maintenir, surface d'attaque (PHP/plugins), coût.
2. **Site statique + contenu en fichiers (MDX) + Next.js** — contenu versionné en git, revu en PR, zéro backend, hébergement gratuit (Netlify).
3. **SPA + API maison** — sur-dimensionné pour un site de contenu.

## Décision
**Next.js (App Router) en rendu quasi-statique**, contenu en **MDX** typé par **Contentlayer2**, hébergé sur **Netlify**. Le contenu vit dans `content/`, le schéma dans `contentlayer.config.ts`. Les éditions passées sont **figées en export statique** dans `public-archive/` et redirigées via `netlify.toml`.

## Conséquences
- **Positives** : surface d'attaque minimale (pas de backend/DB), coût ≈ 0, contenu versionné et relu, performances et SEO natifs, archivage simple.
- **Négatives / coûts** :
  - **Contentlayer2** est peu maintenu → **risque de dépendance** ; prévoir une stratégie de sortie (migration vers `next-mdx-remote`, Velite, ou Fumadocs) si abandon. À traiter par un ADR le moment venu.
  - Toute interactivité (favoris, formulaires) repose sur des **tiers** (Mailchimp/Brevo, TropEvent) ou du **client-side** (localStorage).
  - Le **rituel annuel** est manuel (cf. README) → à outiller.
- **À revoir si** : on doit servir du contenu dynamique authentifié → ce besoin relève de l'**admin séparée** (voir ADR-0003), pas de ce site.
