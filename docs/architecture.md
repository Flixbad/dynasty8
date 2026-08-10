# Architecture Dynasty8

## Vue d'ensemble

Application **full-stack React** basée sur Next.js App Router :

- **Frontend** : pages serveur + composants client (filtres, formulaire)
- **Backend** : Route Handlers dans `src/app/api`
- **Données** : couche data en mémoire (`src/data`) — remplaçable par une DB plus tard

## Flux catalogue

```
Page /biens → searchParams → filterProperties() → PropertyGrid
API GET /api/properties → mêmes filtres → JSON
```

## Contact

```
ContactForm → POST /api/contact → validation → log (extensible Discord/CRM)
```

## Évolutions possibles

- Base SQLite / Postgres + Prisma
- Auth staff pour CRUD biens
- Webhook Discord pour leads
- Intégration Discord bot pour annonces RP
