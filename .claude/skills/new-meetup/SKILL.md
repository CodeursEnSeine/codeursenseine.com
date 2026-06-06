---
name: new-meetup
description: Crée la fiche MDX d'un nouveau meetup mensuel Codeurs en Seine (frontmatter Contentlayer + corps). À utiliser quand on annonce/prépare un meetup.
---

# Créer un meetup

Objectif : générer un fichier `content/meetups/AAAA-MM-JJ-meetup.mdx` conforme au schéma `Meetup` de `contentlayer.config.ts`.

## Étapes
1. Demander (ou déduire) : date, titre, accroche (excerpt), horaires début/fin, lieu, lien d'inscription (meetup.com / conference-hall), liste des speakers si connue.
2. Créer le fichier `content/meetups/AAAA-MM-JJ-meetup.mdx` avec **exactement** ce frontmatter :

```mdx
---
category: meetup
slug: <slug-unique-kebab-case>
published: false   # passer à true seulement quand prêt à publier
title: "<Titre>"
excerpt: "<Phrase d'accroche courte>"
meetup_date: AAAA-MM-JJ
meetup_start_time: 18h30
meetup_end_time: 21h00
meetup_location: <Lieu, Ville>
# meetup_register_link: <URL d'inscription quand disponible>
canceled: false
---

<Contenu Markdown/MDX : présentation, programme, appel à orateurs…>
```

## Règles
- `published: false` tant que ce n'est pas validé → invisible en prod.
- `slug` unique, kebab-case (sert d'identifiant et d'URL `/meetups/events/<slug>`).
- Horaires au format `18h30` (string), pas `18:30`.
- Pour ajouter des speakers dans le corps, utiliser le composant `<MeetupSpeaker speaker={{ name, avatar, bio }} />` (avatars dans `public/images/meetups/speakers/`).
- Les boutons d'action utilisent Chakra : `<Button as="a" href="..." colorScheme="brand" target="_blank" rel="noopener noreferrer">…</Button>`.
- S'inspirer d'un meetup récent existant (`content/meetups/2026-*.mdx`) pour le ton et la mise en forme.

## Vérification
- `npm run build:content` (ou `npm run lint`) doit passer sans erreur de schéma.
- Relire accents/orthographe (français correct).
