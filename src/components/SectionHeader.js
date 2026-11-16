import { View, Text, StyleSheet } from 'react-native';

const SectionHeader = ({ label, title, linkText }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.link}>{linkText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#121212',
  },
  label: {
    marginBottom: 8,
    color: '#6b6b6b',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  title: {
    fontSize: 44,
    fontWeight: '900',
    lineHeight: 46,
    textTransform: 'uppercase',
  },
  link: {
    alignSelf: 'flex-start',
    marginTop: 14,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ff3d1f',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default SectionHeader;
