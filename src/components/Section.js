import { View, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';

// Section : l'en-tête + la grille. Les cartes arrivent via children.
const Section = ({ label, title, linkText, children }) => {
  return (
    <View style={styles.section}>
      <SectionHeader label={label} title={title} linkText={linkText} />
      <View style={styles.grille}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { padding: 16, paddingTop: 32 },
  grille: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Section;
