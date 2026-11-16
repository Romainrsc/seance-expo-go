import { View, Text, StyleSheet } from 'react-native';

// Pastille : couleur et encre ont une valeur par défaut (rouge / blanc).
// Sans texte, rien n'est affiché (toutes les cartes n'ont pas de badge).
const Badge = ({ texte, couleur = '#ff3d1f', encre = '#ffffff' }) => {
  if (!texte) return null;

  return (
    <View style={[styles.badge, { backgroundColor: couleur }]}>
      <Text style={[styles.text, { color: encre }]}>{texte}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});

export default Badge;
