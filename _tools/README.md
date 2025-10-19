# Tools

## Actions

### Initialiser les fiches speakers

Permet de créer des fichiers MDX pour les speakers listés dans le fichier `speakers.txt`.

```bash
npx ts-node _tools/init-speakers.ts
```


### Renommer les fichiers des conférences pour le SEO

Renommer correctement les fichiers des conférences pour les SEO car ils sont utilisés dans les URLs.

```bash
npx ts-node _tools/slugify.ts
```

A lancer une fois les cotenus des conférences finalisés.


### Mettre à jour les types dans les fichiers MDX

Permet de mettre à jour le type (Talk ou Speaker) dans les fichiers MDX en fonction du template utilisé.

```bash
npx ts-node _tools/update_mdx_types.ts
```

Normalement ce script ne devrait plus resservir.
