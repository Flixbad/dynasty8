# Guide d'installation

## Prérequis

- Node.js 20+
- npm 10+

## Installation

```bash
git clone <url-du-repo> dynasty8
cd dynasty8
npm install
cp .env.example .env.local
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Déploiement recommandé : Vercel, ou tout hébergeur Node supportant Next.js.
