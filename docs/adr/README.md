# Architecture Decision Records (ADR)

Les ADR consignent **les décisions d'architecture importantes**, leur **contexte** et leurs **conséquences**. Ils servent à comprendre *pourquoi* le projet est comme il est — utile pour les nouveaux membres et pour reprendre une décision plus tard sans refaire tout le raisonnement.

## Règles
- 1 décision = 1 fichier `NNNN-titre-en-kebab-case.md`, numéroté en continu.
- On **n'édite pas** un ADR accepté : on en crée un nouveau qui le **remplace** (champ `Statut: remplacé par ADR-XXXX`).
- Statuts : `proposé`, `accepté`, `remplacé`, `déprécié`.

## Index
| # | Titre | Statut |
|---|---|---|
| [0001](0001-utiliser-des-adr.md) | Utiliser des ADR | accepté |
| [0002](0002-site-public-statique-next-contentlayer.md) | Site public : statique Next.js + Contentlayer | accepté (existant) |
| [0003](0003-plateforme-admin-techno.md) | Plateforme d'administration : application séparée + choix techno | proposé |
| [0004](0004-experience-attendees-pwa.md) | Expérience attendees : PWA plutôt qu'app native | proposé |

## Template
Voir [`_template.md`](_template.md).
