# Urban Eye

Application mobile React Native / Expo (SDK 58), réalisée dans le cours **Applications Multimédia Q5** (Haute École Francisco Ferrer, 3TI).

- Séance 13 : <https://www.techniques-graphiques.be/lemal/26-27/Application-multimedia-Q5/conduite/seance-13.php>
- Séance 14 : <https://www.techniques-graphiques.be/lemal/26-27/Application-multimedia-Q5/conduite/seance-14.php>

## Lancer l'application

Prérequis : Node.js 22.13+, Expo Go à jour sur le téléphone, un compte Expo. Sous Windows, utiliser Git Bash (pas PowerShell).

```bash
npm install
npx expo login
npx expo start        # scanner le QR code avec Expo Go
```

- Réseau qui bloque : `npx expo start --tunnel`
- Navigateur : touche `w` dans le terminal
- Ajouter une dépendance : `npx expo install nom-du-paquet` (jamais `npm install`)
- Ne pas lancer `npm audit fix --force`, ne pas changer la version du SDK

## Séance 13 : Expo 1 (terminée)

Objectif : créer un projet Expo, l'ouvrir sur le téléphone avec Expo Go, traduire du React web en React Native et faire de la carte d'un concert la première carte d'Urban Eye.

- [x] Projet créé et ouvert sur le téléphone (Fast Refresh, support navigateur)
- [x] Tableau React Web / React Native dans `App.js`
- [x] En-tête du Pulse Festival traduit : `Header`, `Logo`, `MainNav`
- [x] Grille des concerts : `SectionHeader`, `Badge`, `Carte`, `Concerts`
- [x] `Carte` générique (concerts et captures), avec `Badge` à couleur et encre paramétrables
- [x] Section `Captures` (catégories colorées, issues de `src/captures.js`)
- [x] Bonus : composant `Section`, section `Arts & performances`, carte vedette (`vedette`)

### Structure

```
App.js                      zone sûre + défilement
src/data.js, captures.js    données du kit (ne pas modifier)
src/assets/images/          14 images PNG
src/components/
  Header, Logo, MainNav     en-tête
  SectionHeader             titre de section
  Badge                     pastille (couleur / encre paramétrables)
  Carte                     carte générique, prop vedette
  Section                   en-tête + grille, cartes reçues via children
  Concerts, Captures, Arts  les trois sections
```

## Séance 14 : Expo 2, TestFlight et APK (en cours)

Objectif : installer l'application **hors d'Expo Go**, grâce à un build EAS. Le professeur a préparé les comptes et la signature. Toute la classe publie dans la même application « Urban Eye 3TI Prof », et chaque étudiant fabrique son propre build.

| Élément | Valeur |
|---|---|
| Organisation Expo | `heff-3ti` |
| Projet Expo | `urban-eye-prof` |
| Identifiant iOS / Android | `be.heff.urbaneye.prof` |

### À faire

1. **Rejoindre l'organisation** : donner son nom d'utilisateur Expo au professeur et accepter l'invitation (fait : l'équipe `heff-3ti` apparaît sur expo.dev).
2. **Installer EAS** : `npm install -g eas-cli`, puis `eas login` et `eas whoami`. On doit voir `heff-3ti (Role: Developer)`.
3. **Donner une identité au projet** (commit avant toute modification) :
   - `app.json` : `owner` = `heff-3ti`, `slug` = `urban-eye-prof`, `bundleIdentifier` et `package` = `be.heff.urbaneye.prof`, `usesNonExemptEncryption: false`, `extra.eas.projectId`. Le `name` contient son prénom.
   - `eas.json` : profils `production` (`autoIncrement: true`), `preview` (APK, distribution interne) et `submit.production.ios.ascAppId`.
   - Vérifier que l'app tourne toujours avec `npx expo start`, puis commit.
4. **Build iPhone** (un seul build à la fois pour la classe) :
   ```bash
   eas build --platform ios --profile production --auto-submit --no-wait --message "Prénom"
   ```
   À la question sur le compte Apple, répondre `n`. Noter le `Build number`. Compter 5 à 30 minutes de traitement Apple.
5. **Installer sur iPhone** : app TestFlight, lien public de la classe, puis choisir son build.
6. **Build Android** :
   ```bash
   eas build --platform android --profile preview --no-wait --message "Prénom"
   ```
   Puis télécharger et installer l'APK depuis la page du build (`expo.dev`, projet `urban-eye-prof`, onglet Builds).

### Notions

- **Expo Go** lit le code en direct depuis l'ordinateur ; un **build** est figé (nouveau code = nouveau build).
- **Version** (`1.0.0`) : changée à la main. **Numéro de build** : incrémenté automatiquement.
- Plan gratuit : 15 builds iPhone par mois. Ne jamais relancer un build échoué sans prévenir.

## Suite du programme

- **Mercredi 18 novembre** : habillage (couleurs, polices, catégories issues de l'Infographie 2D). Le Pulse Festival quitte l'application, la `Carte` reste.
- Ensuite : lecture des vraies captures par l'API, puis appareil photo et position.
