# ADR-0003 — Plateforme d'administration : application séparée + choix de techno

- **Statut** : proposé (à valider par l'équipe avant Phase 2)
- **Date** : 2026-06-06
- **Décideurs** : équipe Codeurs en Seine

## Contexte
Besoin (Phase 2) d'un espace privé pour les organisateurs : CRM sponsors avec workflow d'acquisition, gestion des événements (salle/date/speakers), planification & publication des communications réseaux sociaux, suivi compta/prestataires/inscriptions. Cela implique **authentification, rôles, base de données, données potentiellement personnelles** — à l'opposé du site public statique (ADR-0002).

Question explicite posée : **faut-il changer de techno (SvelteKit ?) pour cette partie ?**

## Contraintes spécifiques
- Équipe **bénévole, à turnover** → la pérennité prime sur l'élégance.
- Minimiser le **code maison** à maintenir et la **diversité technologique**.
- RGPD : données de contacts sponsors / inscrits.
- Budget limité.

## Options envisagées

### Backend / données
| Option | Pour | Contre |
|---|---|---|
| **Supabase** (Postgres managé + Auth + RLS + Storage + Realtime) | Auth, rôles, sécurité au niveau ligne, temps réel, stockage fichiers, généreux en gratuit | Dépendance à un fournisseur (mitigée : Postgres standard, auto-hébergeable) |
| **Appwrite / Pocketbase** | Auto-hébergeable, simple | Infra à opérer par des bénévoles |
| **Directus / Strapi** (headless CMS) | CRUD + admin auto-généré | Moins adapté aux workflows custom (publication multi-réseaux) |
| **API maison + DB** | Contrôle total | Beaucoup de code à maintenir → mauvais pour le turnover |

### Front admin
| Option | Pour | Contre |
|---|---|---|
| **Next.js** (= même stack que le site) | **Une seule techno à transmettre**, Server Actions, écosystème, équipe déjà dessus | CRUD un peu verbeux |
| **SvelteKit** | DX agréable, léger, form actions élégantes | **2ᵉ stack** à maintenir par des bénévoles, écosystème admin/auth plus mince |
| **Refine / AdminJS** (sur React) | CRUD admin quasi gratuit | Cadre opinionné |

## Décision (recommandée)
**Application séparée** sur `admin.codeursenseine.com`, **distincte** du site public (qui reste statique, ADR-0002).

Stack recommandée : **Supabase (backend/auth/DB) + Next.js (front admin)**.
- Rationale : **une seule techno front** (Next) à connaître pour contribuer au site *et* à l'admin → onboarding minimal. Supabase couvre auth + rôles + RLS + storage + temps réel sans code maison.
- Les workflows métier (états sponsors, calendrier com) sont du TS partageable avec le site.

**Sur SvelteKit** : techniquement excellent, mais retenu **uniquement si** un·e mainteneur·e s'engage à le porter dans la durée. Le surcoût n'est pas le dev initial mais la **transmission** à des bénévoles futurs. Sans ce porteur, préférer Next.

## Conséquences
- **Positives** : site public inchangé et toujours aussi sûr ; admin isolée (compromission de l'admin ≠ compromission du site) ; une stack front unique.
- **Négatives / coûts** : un nouveau service (Supabase) à administrer et sa facture potentielle à surveiller ; politique RGPD à étendre (données sponsors/inscrits) ; sauvegardes DB à mettre en place.
- **Publication multi-réseaux** : fera l'objet d'un ADR-0005 dédié (APIs natives vs agrégateur vs file manuelle).
- **À revoir si** : un porteur SvelteKit s'engage, ou si un outil low-code couvre 80 % du besoin sans bridage.
