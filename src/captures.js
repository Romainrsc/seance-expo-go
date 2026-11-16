// Urban Eye : des captures de démonstration (Applications multimédia, séance 13).
// Les vraies photos arriveront avec la caméra du téléphone ; d'ici là, une image
// par catégorie, la forme de l'écran de lancement de la séance 12.
// Les couleurs sont provisoires : celles de votre direction artistique les remplaceront.

import stickerImage from './assets/images/capture-sticker.png';
import enseigneImage from './assets/images/capture-enseigne.png';
import graffImage from './assets/images/capture-graff.png';
import wtfImage from './assets/images/capture-wtf.png';

// ==========================================
// LES QUATRE CATÉGORIES
// couleur : le fond de la pastille ; encre : la couleur de son texte
// ==========================================
export const categories = {
  stickers: { label: "Stickers", couleur: "#FFD23F", encre: "#111216" },
  enseignes: { label: "Enseignes & Typographies", couleur: "#2F6BFF", encre: "#FFFFFF" },
  graff: { label: "Illustrations & Graff", couleur: "#FF4FA3", encre: "#111216" },
  wtf: { label: "WTF", couleur: "#B8FF3C", encre: "#111216" }
};

// ==========================================
// LES CAPTURES
// categorie : une clé de l'objet categories ci-dessus
// ==========================================
export const captures = [
  {
    id: 1,
    image: stickerImage,
    alt: "Capture de démonstration, catégorie Stickers",
    titre: "Chat masqué",
    categorie: "stickers",
    lieu: "Rue Haute",
    date: "04/11/2026"
  },
  {
    id: 2,
    image: enseigneImage,
    alt: "Capture de démonstration, catégorie Enseignes et typographies",
    titre: "Friterie, lettres peintes",
    categorie: "enseignes",
    lieu: "Place Jourdan",
    date: "05/11/2026"
  },
  {
    id: 3,
    image: graffImage,
    alt: "Capture de démonstration, catégorie Illustrations et graff",
    titre: "Baleine sur un pignon",
    categorie: "graff",
    lieu: "Quai des Charbonnages",
    date: "05/11/2026"
  },
  {
    id: 4,
    image: wtfImage,
    alt: "Capture de démonstration, catégorie WTF",
    titre: "Un fauteuil sur un abribus",
    categorie: "wtf",
    lieu: "Avenue Louise",
    date: "06/11/2026"
  },
  {
    id: 5,
    image: stickerImage,
    alt: "Capture de démonstration, catégorie Stickers",
    titre: "Oeil fluo sur un poteau",
    categorie: "stickers",
    lieu: "Gare du Midi",
    date: "07/11/2026"
  },
  {
    id: 6,
    image: enseigneImage,
    alt: "Capture de démonstration, catégorie Enseignes et typographies",
    titre: "Néon d'une ancienne pharmacie",
    categorie: "enseignes",
    lieu: "Chaussée d'Ixelles",
    date: "08/11/2026"
  }
];
