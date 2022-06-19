import { StyleSheet, Image,  Alert, TouchableOpacity  } from 'react-native';
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

      <TouchableOpacity  style={styles.iAMSmartButton} onPress={() => onPress }>
        <Image
          style={styles.iAMSmartButtonImage}
          source={{
            uri: 'https://apimgmtst6rmx1jnpkvaures.blob.core.windows.net/content/MediaLibrary/Images/resources/icon-dark.png',
          }}
        />
        <Text style={styles.iAMSmartButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>

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
  iAMSmartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#2b7367',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    border: 'none',
    paddingTop: 4.375,
    paddingRight: 8.75,
    paddingBottom: 4.375,
    paddingLeft: 8.75,
    cursor: 'pointer',
    outline: 'none',
    borderRadius: 10,
    flexWrap: 'nowrap',
  },
  iAMSmartButtonImage: {
    width: 26,
    height:35,
  } ,
  iAMSmartButtonText: {
    color: '#FFFFFF',
    fontSize: 16.2,
    fontFamily: 'sans-serif',
  },

});
