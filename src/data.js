// Pulse Festival : les données de l'interrogation de découpage React de M. Jamoulle,
// adaptées pour React Native (Applications multimédia, séance 13).
// Deux différences avec le data.js d'origine, rien d'autre :
//   - les images sont des PNG (même nom, même dossier) : l'<Image> de React Native
//     n'affiche pas le SVG ;
//   - deux tirets typographiques remplacés par un trait d'union (dateRange, et
//     l'horaire de Lumen Drift).
// Ne modifiez pas ce fichier : les composants lisent leurs données ici.

// Import des images depuis assets/images (PNG)
import posterImage from './assets/images/affiche-2027.png';
import orageMinuitImage from './assets/images/orage-minuit.png';
import neonSafariImage from './assets/images/neon-safari.png';
import veloursNoirImage from './assets/images/velours-noir.png';
import kilowattClubImage from './assets/images/kilowatt-club.png';
import atlasParadeImage from './assets/images/atlas-parade.png';
import miraSoleneImage from './assets/images/mira-solene.png';
import lumenDriftImage from './assets/images/lumen-drift.png';
import corpsElectriquesImage from './assets/images/corps-electriques.png';
import syntheLabImage from './assets/images/synthe-lab.png';

// ==========================================
// INFOS DU SITE
// ==========================================
export const siteInfo = {
  logo: {
    icon: "PF",
    text: "Pulse Festival"
  },
  newsletter: {
    title: "Restez informé·e·s",
    description: "Nouveaux noms, préventes et coulisses du festival : une lettre par mois, pas plus.",
    placeholder: "Votre adresse email",
    buttonText: "S'inscrire →"
  },
  copyright: "© 2027 Pulse Festival △ Tous droits réservés"
};

// ==========================================
// DONNÉES DE NAVIGATION
// ==========================================
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Concerts", href: "#concerts" },
  { label: "Arts & performances", href: "#arts" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Infos pratiques", href: "#infos" }
];

// ==========================================
// LE FESTIVAL (HERO)
// ==========================================
export const festival = {
  title: "Pulse Festival",
  dateRange: "09-11",
  month: "Juillet 2027",
  tagline: "Musiques, arts numériques et performances",
  place: "Parc des Étangs, Bruxelles",
  image: posterImage,
  alt: "Affiche du Pulse Festival 2027"
};

// ==========================================
// CHIFFRES CLÉS
// ==========================================
export const keyFigures = [
  { id: 1, value: "30+", label: "Concerts" },
  { id: 2, value: "12", label: "Performances" },
  { id: 3, value: "4", label: "Scènes" },
  { id: 4, value: "3", label: "Jours" }
];

// ==========================================
// CONCERTS
// Attention : toutes les cartes n'ont pas de badge
// ==========================================
export const concerts = [
  {
    id: 1,
    image: orageMinuitImage,
    alt: "Orage Minuit",
    name: "Orage Minuit",
    category: "Rock alternatif",
    day: "Samedi",
    time: "22:00",
    venue: "Grande Scène",
    badge: "Tête d'affiche",
    featured: true // BONUS uniquement : carte vedette
  },
  {
    id: 2,
    image: neonSafariImage,
    alt: "Néon Safari",
    name: "Néon Safari",
    category: "Électro",
    day: "Vendredi",
    time: "20:30",
    venue: "Grande Scène",
    badge: "Complet"
  },
  {
    id: 3,
    image: veloursNoirImage,
    alt: "Velours Noir",
    name: "Velours Noir",
    category: "Soul",
    day: "Vendredi",
    time: "22:15",
    venue: "Chapiteau"
  },
  {
    id: 4,
    image: kilowattClubImage,
    alt: "Kilowatt Club",
    name: "Kilowatt Club",
    category: "Techno",
    day: "Samedi",
    time: "19:00",
    venue: "Dôme",
    badge: "Nouveau"
  },
  {
    id: 5,
    image: atlasParadeImage,
    alt: "Atlas Parade",
    name: "Atlas Parade",
    category: "Afrobeat",
    day: "Dimanche",
    time: "17:30",
    venue: "Chapiteau"
  },
  {
    id: 6,
    image: miraSoleneImage,
    alt: "Mira Solène",
    name: "Mira Solène",
    category: "Pop",
    day: "Dimanche",
    time: "21:00",
    venue: "Grande Scène"
  }
];

// ==========================================
// ARTS & PERFORMANCES
// Même structure que les concerts
// ==========================================
export const performances = [
  {
    id: 7,
    image: lumenDriftImage,
    alt: "Lumen Drift",
    name: "Lumen Drift",
    category: "Installation lumineuse",
    day: "Tous les jours",
    time: "14:00 - 23:00",
    venue: "Halle 3",
    badge: "Accès libre"
  },
  {
    id: 8,
    image: corpsElectriquesImage,
    alt: "Corps Électriques",
    name: "Corps Électriques",
    category: "Performance dansée",
    day: "Samedi",
    time: "18:30",
    venue: "Chapiteau"
  },
  {
    id: 9,
    image: syntheLabImage,
    alt: "Synthé Lab",
    name: "Synthé Lab",
    category: "Atelier",
    day: "Dimanche",
    time: "15:00",
    venue: "Dôme",
    badge: "Dès 8 ans"
  }
];

// ==========================================
// DONNÉES DU FOOTER
// ==========================================
export const footerColumns = [
  {
    title: "Le festival",
    links: [
      { label: "Notre histoire", href: "#" },
      { label: "L'équipe", href: "#" },
      { label: "Bénévoles", href: "#" },
      { label: "Presse", href: "#" }
    ]
  },
  {
    title: "Infos pratiques",
    links: [
      { label: "Accès", href: "#" },
      { label: "Camping", href: "#" },
      { label: "Restauration", href: "#" },
      { label: "FAQ", href: "#" }
    ]
  },
  {
    title: "Partenaires",
    links: [
      { label: "Sponsors", href: "#" },
      { label: "Médias", href: "#" },
      { label: "Institutions", href: "#" },
      { label: "Devenir partenaire", href: "#" }
    ]
  }
];

// ==========================================
// RÉSEAUX SOCIAUX
// ==========================================
export const socialLinks = [
  { id: 1, icon: "ig", name: "Instagram", href: "#" },
  { id: 2, icon: "fb", name: "Facebook", href: "#" },
  { id: 3, icon: "tt", name: "TikTok", href: "#" },
  { id: 4, icon: "yt", name: "YouTube", href: "#" }
];
