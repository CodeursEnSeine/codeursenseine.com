# Brancher Claude sur Slack & Notion (MCP)

Objectif (demandé par l'association) : permettre à l'assistant de **lire** le fonctionnement réel de l'asso (canaux Slack, docs Notion des nouveaux membres) pour proposer des améliorations pertinentes, sans réécrire ce qui est déjà dans `docs/`.

## Principe
Le **Model Context Protocol (MCP)** connecte Claude Code à des sources externes via des « serveurs MCP ». On commence en **lecture seule** et on cadre le périmètre.

## Mise en place (par un·e admin)
1. **Notion** : créer une intégration Notion, partager **uniquement** la base « onboarding / fonctionnement asso » avec l'intégration, récupérer le token.
2. **Slack** : créer une app Slack (scopes lecture : `channels:history`, `channels:read`), l'inviter dans **les seuls canaux pertinents** (ex. `#orga`, `#sponsors`), récupérer le token.
3. Déclarer les serveurs MCP dans la config Claude (au niveau projet `.mcp.json` ou via `claude mcp add`). Ne **jamais committer les tokens** : variables d'environnement / coffre.

> Les schémas exacts des serveurs MCP évoluent ; suivre la doc officielle du serveur MCP Slack/Notion retenu au moment de l'installation.

## Garde-fous (important — RGPD & confidentialité)
- **Périmètre minimal** : n'exposer que les canaux/bases nécessaires. Un Slack contient souvent des **données personnelles** (membres, sponsors, échanges privés) → ne pas tout brancher.
- **Lecture seule d'abord** : pas d'écriture/publication automatique tant que ce n'est pas explicitement validé.
- **Humain dans la boucle** : l'assistant propose, l'humain décide et publie.
- **Pas de secrets en clair** dans les canaux exposés (rappeler la règle à l'équipe).
- **Données sensibles** : préférer Notion (doc structurée et maîtrisée) à Slack (flux non filtré) pour la connaissance de fond.

## Bonne pratique
La **source de vérité technique** reste ce dépôt (`docs/CONTEXT.md`, `docs/adr/`). Slack/Notion enrichissent le *contexte opérationnel* (qui fait quoi, décisions en cours), pas la doc d'archi. Quand une info Slack/Notion devient durable, la **remonter dans `docs/`** ou un ADR.
