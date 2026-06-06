---
name: new-sponsor
description: Crée ou active la fiche MDX d'un sponsor (conférence ou meetup) avec logo et niveau. À utiliser pour ajouter/activer un sponsor sur le site.
---

# Ajouter / activer un sponsor

Objectif : générer `content/sponsors/<slug>.mdx` conforme au schéma `Sponsor`, et placer le logo.

## Étapes
1. Demander : nom, URL du site (link), niveau (`bronze`/`silver`/`gold`/`platinium` ou `disabled`), sponsor de meetup ? (isMeetupSponsor), texte de présentation, fichier logo.
2. Déposer le logo dans `public/images/sponsors/` (PNG/SVG/WebP). Le champ `logo` est **le nom de fichier seul** (ex. `acme@web.png`), le chemin est calculé.
3. Créer `content/sponsors/<slug>.mdx` :

```mdx
---
name: <Nom du sponsor>
logo: <fichier-logo.png>
link: <https://...>
isMeetupSponsor: false   # true si sponsor des meetups
sponsor: disabled        # disabled | bronze | silver | gold | platinium
---

<Texte de présentation du sponsor (quelques paragraphes).>
```

## Règles
- `sponsor: disabled` → la fiche existe mais **n'apparaît pas** dans la liste affichée. Mettre le niveau réel pour l'afficher (workflow : on active une fois convention signée + paiement reçu — cf. `docs/PLAN.md` Module 1).
- `link` est **requis**. `name` est **requis**.
- Optimiser le logo (taille raisonnable, fond transparent si possible).
- Un commit dédié : `feat(sponsors): enable <Nom>` ou `feat(sponsors): add <Nom>`.

## Vérification
- `npm run build:content` sans erreur.
- Vérifier l'affichage sur la page sponsors (`/2026/sponsors`).
