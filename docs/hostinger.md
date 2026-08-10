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

### Si le design ne s’affiche toujours pas

1. Ouvre `https://ton-domaine/next/static/chunks/` — tu dois voir des fichiers `.css` / `.js`
2. Si 403/404 : le dossier `next/` n’est pas bien uploadé → ré-extrais le zip
3. Vide le cache Hostinger (hPanel → Cache) si activé

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
