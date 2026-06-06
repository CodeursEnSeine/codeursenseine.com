# ADR-0004 — Expérience attendees : PWA plutôt qu'application native

- **Statut** : proposé
- **Date** : 2026-06-06
- **Décideurs** : équipe Codeurs en Seine

## Contexte
Question posée : faut-il une **app mobile dédiée** aux spectateurs (programme de la conférence, notifications, infos live) ? Idem pour les meetups (notifs et infos en direct).

Besoins identifiés : consulter le **programme** (et ses favoris), recevoir des **notifications** (J-1, « ça commence », **changement de salle**), infos pratiques (plan, accès), éventuellement du **temps réel** le jour J.

Contraintes : événement **annuel** (+ meetups mensuels), équipe **bénévole**, public technophile.

## Options envisagées
1. **App native iOS + Android** (React Native / Flutter / natif)
   - Pour : notifications push « premium », capteurs (NFC, scan), offline natif.
   - Contre : **2 stores** (comptes, revues, conformité), build/signature, maintenance toute l'année pour un usage de quelques jours, courbe d'adoption (installation depuis un store). Disproportionné pour des bénévoles.
2. **PWA (Progressive Web App)** intégrée au site/admin
   - Pour : **une seule base de code** (web), installable (« ajouter à l'écran d'accueil »), **pas de store**, offline via service worker, **Web Push** (Android + iOS 16.4+), mises à jour instantanées.
   - Contre : push iOS nécessite l'installation préalable de la PWA ; quelques limites natives (pas de NFC partout).
3. **Pas d'app, site responsive seul**
   - Pour : zéro effort supplémentaire.
   - Contre : pas de notifications, pas d'offline, expérience « jour J » plus pauvre.

## Décision (recommandée)
**PWA** greffée sur l'expérience web existante.
- **Programme + favoris offline** : faire évoluer les favoris actuels (localStorage) vers un cache service worker.
- **Notifications Web Push** : J-1, rappels de sessions favorites, **changements de salle/horaire**, annonces.
- **Temps réel léger** le jour J : un flux de données simple (JSON publié rafraîchi, ou Supabase Realtime côté admin — cf. ADR-0003) pour propager les changements sans infra lourde.
- **Pas d'app native** tant qu'un besoin natif fort (badge NFC, scan d'accès) n'est pas avéré.

## Conséquences
- **Positives** : coût et maintenance minimaux, une seule techno, adoption sans friction (un lien), réutilise l'existant (favoris, programme).
- **Négatives / coûts** : gérer un service worker (cache/versionnement à soigner pour ne pas servir du périmé), configurer Web Push (clés VAPID), tester sur iOS.
- **À revoir si** : besoin de fonctionnalités natives (contrôle d'accès NFC, géofencing salles) ou volumétrie justifiant une app dédiée.
