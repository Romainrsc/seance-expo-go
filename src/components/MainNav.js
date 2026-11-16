import { View, Text, StyleSheet } from 'react-native';

// .map() crée un <Text> par lien ; chaque élément reçoit une key unique
const MainNav = ({ links }) => {
  return (
    <View style={styles.nav}>
      {links.map(link => (
        <Text key={link.href} style={styles.link}>
          {link.label}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 14,
  },
  link: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#121212',
  },
});

export default MainNav;
