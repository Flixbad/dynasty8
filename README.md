# Dynasty8

Agence immobilière fictive pour **GTA RP** — site web React (Next.js) au design chic Los Santos.

Dynasty8 propose maisons, appartements, villas, penthouses, garages, entrepôts, bureaux et terrains à travers Los Santos et Blaine County.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- API Routes (`/api/properties`, `/api/contact`)
- Données mock GTA RP (quartiers, prix, catalogues)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build production
npm run start   # serveur production
npm run lint    # ESLint
```

## Variables d'environnement

Copier `.env.example` vers `.env.local` si besoin :

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site |
| `DISCORD_WEBHOOK_URL` | (optionnel) webhook pour les contacts |

## Expérience

- Splash intro Dynasty8
- Scroll fluide (Lenis) + animations (Framer Motion)
- Recherche globale **Ctrl / ⌘ + K**
- Favoris & comparateur (localStorage)
- Dock flottant + toasts
- Hero carousel + estimateur RP
- Galerie lightbox plein écran
- Curseur custom (desktop)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, sélection, catégories |
| `/biens` | Catalogue avec filtres |
| `/biens/[slug]` | Fiche bien + formulaire |
| `/favoris` | Biens sauvegardés |
| `/comparer` | Comparaison jusqu'à 3 biens |
| `/zones` | Carte San Andreas & découverte Zones 1–4 |
| `/zones/[slug]` | Biens d'une zone (+ détail par catégorie) |
| `/categories` | Liste des typologies |
| `/categories/[slug]` | Biens par typologie |
| `/agence` | Présentation & conseillers |
| `/contact` | Formulaire + estimateur |
| `/categories/[slug]` | Biens par catégorie |
| `/agence` | Présentation & conseillers |
| `/contact` | Formulaire de contact |

## API

- `GET /api/properties?category=&district=&status=&q=`
- `GET /api/properties/[id]`
- `POST /api/contact` — body JSON `{ name, email, phone?, message, propertyId? }`

## Arborescence

```
src/
  app/                 # Pages & API Routes
  components/          # UI (layout, home, properties, contact)
  data/                # Catalogue, catégories, agents
  lib/                 # Formatage
  types/               # Types TypeScript
assets/                # Assets statiques projet
docs/                  # Documentation
```

## Design

Palette inspirée des quartiers chic de Los Santos : encre profonde, or champagne Dynasty8, émeraude, touches océan Del Perro. Typographie Cormorant Garamond (display) + Outfit (texte).

## Licence

MIT — voir [LICENSE](./LICENSE).
