import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFormFillingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iAM Smart Demo Project - Form Filling</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Image
	      style={styles.logo}
        source={{
          uri: 'https://www.iamsmart.gov.hk/images/ico_home_3_2.png',
        }}
      /> 

      <EditScreenInfo path="/screens/TabFormFillingScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgoldenrodyellow',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 300,
    height: 300,
  }
});
