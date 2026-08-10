# Déploiement Hostinger (hébergement mutualisé)

Dynasty8 est exporté en **site statique** (`out/`). Aucun Node.js n’est requis sur le serveur.

## 1. Build local

```bash
npm install
npm run build
```

Le dossier `out/` contient tout le site prêt à uploader.

Astuce Windows (PowerShell) — zip pour upload :

```powershell
npm run build
Compress-Archive -Path out\* -DestinationPath dynasty8-hostinger.zip -Force
```

## 2. Upload Hostinger

1. Connecte-toi à **hPanel** → **Fichiers** → **Gestionnaire de fichiers**
2. Ouvre `public_html` (ou le dossier du sous-domaine)
3. **Vide** le contenu actuel si besoin (garde éventuellement `cgi-bin`)
4. Upload le contenu de `out/` **à la racine** de `public_html`
   - Doit y avoir `index.html`, `.htaccess`, dossiers `biens/`, `_next/`, etc.
5. Si tu uploades un zip : extrais-le **dans** `public_html` (pas dans un sous-dossier)

### FTP (FileZilla)

- Hôte : fourni par Hostinger  
- Upload **tout** le contenu de `out/` vers `public_html/`

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
