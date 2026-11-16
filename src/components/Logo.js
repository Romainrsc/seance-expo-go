import { View, Text, StyleSheet } from 'react-native';

// Les props sont déstructurées : { icon, text }
const Logo = ({ icon, text }) => {
  return (
    <View style={styles.logo}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: { color: '#ffffff', fontSize: 18, fontWeight: '900', letterSpacing: 1 },
  text: { fontSize: 24, fontWeight: '900', textTransform: 'uppercase' },
});

export default Logo;
