---
name: archive-year
description: Guide le rituel annuel d'archivage d'une édition et d'initialisation de la nouvelle année (tag, build statique, redirections Netlify, currentYear). À utiliser au changement d'édition.
---

# Archiver une édition & initialiser la nouvelle année

Procédure issue du `README.md`, à dérouler avec prudence (effets en cascade build/Netlify).

## A. Archiver l'année écoulée (`XXXX`)
1. **Tag git** sur le dernier commit de l'édition :
   ```bash
   git tag -a archive-XXXX -m "Archive XXXX"
   git push origin archive-XXXX
   ```
2. **Build statique de l'archive** :
   ```bash
   NEXT_PUBLIC_ARCHIVE_YEAR=XXXX npm run build:archive
   npm run start:archive   # vérifier le dossier public-archive/archive-XXXX
   ```
   (Le mode archive active `output: 'export'` + `basePath: /archive-XXXX` dans `next.config.js`.)
3. **Déployer l'archive** sur le projet Netlify dédié :
   https://app.netlify.com/projects/archives-codeurs-en-seine
4. **Redirection** : ajouter dans `netlify.toml` (à la racine) une règle `301` `from = "/XXXX*"` → URL de l'archive (suivre le motif des années précédentes).

## B. Initialiser la nouvelle année (`YYYY = XXXX+1`)
1. `src/constants/site.ts` : passer `currentYear = YYYY` et ajouter `XXXX` dans `pastYears`.
2. Renommer le dossier `src/app/XXXX` → `src/app/YYYY`, puis mettre à jour le contenu des pages (dates, lieu, textes).
3. Mettre à jour la nav (`pastYears` gère les liens des années passées).
4. Nettoyer/repartir le contenu (`content/talks`, `content/speakers`, programme) pour la nouvelle édition.
5. Vérifier l'ID d'inscription **TropEvent** (`src/components/InscriptionTropEvent`) → pointer vers le bon événement (cf. AUDIT F5 / PLAN QW-3).

## Vérifications finales
- `npm run build` OK (site courant).
- Les URLs `/{année passée}/...` redirigent bien vers l'archive.
- La home redirige vers `/{currentYear}`.

## Améliorations possibles
Ce rituel est manuel et risqué : voir `docs/PLAN.md` P1-6 (script d'automatisation). Documenter ici toute déviation rencontrée.
