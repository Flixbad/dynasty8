# Contribuer à Dynasty8

Merci de contribuer au projet.

## Workflow

1. Fork / clone le dépôt
2. Créer une branche : `feat/ma-feature` ou `fix/mon-fix`
3. Installer : `npm install`
4. Développer et vérifier : `npm run lint` + `npm run build`
5. Ouvrir une Pull Request claire

## Conventions

- Messages de commit style Conventional Commits : `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`
- TypeScript strict, pas de `any` inutile
- UI : respecter la palette Dynasty8 (or, encre, émeraude)
- Contenu : rester cohérent avec l’univers GTA RP (Los Santos / Blaine County)

## Ajouter un bien

Éditer `src/data/properties.ts` en suivant le type `Property` (`src/types/index.ts`).
