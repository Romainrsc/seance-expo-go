import { View, Text, Image, StyleSheet } from 'react-native';
import Badge from './Badge';

// Carte générique : elle ne sait pas si elle affiche un concert ou une capture.
// lignes : un tableau de textes (jour / heure / salle, ou lieu / date)
const Carte = ({
  image,
  alt,
  badge,
  badgeCouleur,
  badgeEncre,
  surtitre,
  titre,
  lignes = [],
  vedette = false,
}) => {
  return (
    <View style={[styles.carte, vedette && styles.carteVedette]}>
      <View style={[styles.imageBox, vedette && styles.imageBoxVedette]}>
        <Image source={image} accessibilityLabel={alt} style={styles.image} />
        <Badge texte={badge} couleur={badgeCouleur} encre={badgeEncre} />
      </View>
      <View style={styles.contenu}>
        <Text style={styles.surtitre}>{surtitre}</Text>
        <Text style={[styles.titre, vedette && styles.titreVedette]}>{titre}</Text>
        <View style={styles.lignes}>
          {lignes.map(ligne => (
            <Text key={ligne} style={styles.ligne}>
              {ligne}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carte: { width: '48%', marginBottom: 24 },
  carteVedette: { width: '100%' },
  imageBox: {
    aspectRatio: 4 / 5,
    backgroundColor: '#121212',
    overflow: 'hidden',
  },
  imageBoxVedette: { aspectRatio: 1 },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  contenu: { paddingTop: 12 },
  surtitre: {
    marginBottom: 6,
    color: '#ff3d1f',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  titre: {
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    lineHeight: 22,
  },
  titreVedette: { fontSize: 36, lineHeight: 38 },
  lignes: { marginTop: 8, gap: 2 },
  ligne: { fontSize: 12, color: '#6b6b6b' },
});

export default Carte;
