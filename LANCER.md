# Urban Eye : séance 13 (Expo 1)

## Lancer l'application (Git Bash, pas PowerShell)

```
cd "/c/xampp/htdocs/romain/application-multimédia/seance-13-urban-eye"
npx expo login      # déjà fait
npx expo start      # scanner le QR code avec Expo Go
```

- Réseau de l'école qui bloque : `npx expo start --tunnel`
- Navigateur : touche `w` dans le terminal
- Ajouter une dépendance : `npx expo install nom-du-paquet` (jamais `npm install`)
- Ne pas lancer `npm audit fix --force`, ne pas changer la version du SDK (58)

## Rendre le travail

1. Arrêter le serveur avec `Ctrl+C`
2. `git add .`
3. `git commit -m "AMM 13 : Expo 1"`

## Où est le projet

- Projet qui tourne : `C:\xampp\htdocs\romain\application-multimédia\urban-eye` (hors OneDrive, `node_modules` > 300 Mo)
- Copie du code sans `node_modules` : `...\Lemal\seance-13-expo1\urban-eye`

## Structure

```
App.js                      zone sûre + défilement
src/data.js, captures.js    données du kit (ne pas modifier)
src/assets/images/          14 images PNG
src/components/
  Header, Logo, MainNav     en-tête
  SectionHeader             titre de section
  Badge                     pastille (couleur/encre paramétrables, rien si pas de texte)
  Carte                     carte générique (concerts ET captures), prop vedette
  Section                   en-tête + grille, cartes reçues via children
  Concerts, Captures, Arts  les trois sections
```

## Pas installé (captures Expo, non demandé pour la séance 13)

- Plugin Claude Code `expo@claude-plugins-official`
- `npx eas-cli@latest init --id ...` (relie le projet à ton compte Expo ; utile peut-être en séance 14 pour TestFlight / APK)
- Expo Go : à installer sur le téléphone
