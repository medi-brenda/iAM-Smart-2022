import { StyleSheet, Image, Pressable, Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabAuthenticationScreen({ navigation }: RootTabScreenProps<'TabAuthentication'>) {

  const buttonTitle = "Login with iAM Smart";

  const onPress = () => {
    Alert.alert('pressed');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iAM Smart Demo Project - Authentication</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Image
	      style={styles.logo}
        source={{
          uri: 'https://www.iamsmart.gov.hk/images/ico_home_3_1.png',
        }}
      /> 

      <Pressable style={styles.iAMButton} onPress={onPress}>
        <Text>{buttonTitle}</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightsteelblue',
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
  },
  iAMButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    marginVertical: 10,
    backgroundColor: "#00b035",
  },

});
