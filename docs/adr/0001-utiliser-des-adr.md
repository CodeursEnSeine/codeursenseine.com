# ADR-0001 — Utiliser des Architecture Decision Records

- **Statut** : accepté
- **Date** : 2026-06-06
- **Décideurs** : équipe technique Codeurs en Seine

## Contexte
L'association est portée par des **bénévoles avec rotation**. De nouveaux membres arrivent et posent beaucoup de questions ; la connaissance est dispersée (têtes, Slack, Notion). Les décisions techniques (pourquoi Next, pourquoi Contentlayer, pourquoi archiver ainsi) ne sont écrites nulle part → coûteux à transmettre, risque de refaire/défaire des choix.

## Options envisagées
1. **Wiki Notion seul** — pratique mais déconnecté du code, dérive vite, pas versionné avec les changements.
2. **ADR dans le dépôt** — versionnés avec le code, revus en PR, proches de la vérité.
3. **Ne rien formaliser** — statu quo, dette de connaissance.

## Décision
Adopter des **ADR versionnés dans `docs/adr/`**. Toute décision structurante (choix de techno, d'archi, de service tiers, de modèle de données) fait l'objet d'un ADR. Notion reste pour la doc opérationnelle (qui fait quoi, contacts), `docs/` reste la source technique.

## Conséquences
- **Positives** : onboarding accéléré, décisions traçables, revue en PR, l'IA (Claude Code) peut lire le « pourquoi ».
- **Négatives / coûts** : discipline d'écriture à tenir.
- **À revoir si** : le format devient un frein (peu probable, c'est du markdown).
