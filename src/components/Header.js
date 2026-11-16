import { View, StyleSheet } from 'react-native';
import { siteInfo, navLinks } from '../data';
import Logo from './Logo';
import MainNav from './MainNav';

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo icon={siteInfo.logo.icon} text={siteInfo.logo.text} />
      <MainNav links={navLinks} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#121212',
  },
});

export default Header;
