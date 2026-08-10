# Déploiement Hostinger (hébergement mutualisé)

Dynasty8 est exporté en **site statique** (`out/`). Aucun Node.js n’est requis sur le serveur.

## 1. Build local

```bash
npm install
npm run zip:hostinger
```

Cela génère :
- `out/` — site prêt à uploader (dossier assets renommé `next/` pour Hostinger)
- `dynasty8-hostinger.zip` — archive à envoyer

> Important : le dossier Next `_next` est renommé en `next` automatiquement.
> Sur Hostinger, les dossiers qui commencent par `_` peuvent bloquer le CSS/JS.

## 2. Upload Hostinger

1. hPanel → **Fichiers** → **Gestionnaire de fichiers**
2. Ouvre `public_html` (ou le dossier du sous-domaine `dynasty8`)
3. **Supprime tout** l’ancien contenu (sauf éventuellement `cgi-bin`)
4. Upload `dynasty8-hostinger.zip` puis **Extraire ici**
5. Vérifie que tu as bien à la racine :
   - `index.html`
   - `.htaccess`
   - dossier `next/` (pas `_next`)
   - dossiers `biens/`, `zones/`, etc.
6. Hard refresh navigateur : `Ctrl + Shift + R`

### Si tu vois une erreur 403

Sur un dossier (`/next/` ou `/next/static/chunks/`), le **403 Forbidden** est **normal** : Apache interdit le listing des dossiers.

Teste plutôt un fichier précis, par ex. :
`https://ton-domaine/next/static/chunks/` + un nom `.css` trouvé dans le code source de la page (doit répondre **200**).

### Si le design ne s’affiche toujours pas

1. Affiche le code source de la page → cherche `.css` → ouvre cette URL : doit être **200**
2. Si 404 : le dossier `next/` est incomplet → vide `public_html` et ré-extrais le zip entièrement
3. Hard refresh : `Ctrl + Shift + R`
4. Vide le cache Hostinger (hPanel → Cache) si activé

## 3. Vérifications

- Accueil : `https://ton-domaine.fr/`
- Catalogue : `https://ton-domaine.fr/biens/`
- Contact Life : bouton Contact ouvre le profil Oren RP

## 4. Mises à jour

À chaque modification du site :

```bash
npm run build
```

Puis ré-upload le contenu de `out/` (ou au minimum les fichiers modifiés + `_next/`).

## Limitations mutualisé

| Fonctionnalité | Statut |
|----------------|--------|
| Pages HTML/CSS/JS | ✅ |
| Filtres catalogue | ✅ (côté navigateur) |
| Favoris / comparateur | ✅ (localStorage) |
| API Node `/api/*` | ❌ (retirée, inutilisable en mutualisé) |
| Contact | ✅ via profil Life externe |

## Domaine / SSL

Active le **SSL gratuit** dans hPanel → Sécurité → SSL pour servir le site en HTTPS.
