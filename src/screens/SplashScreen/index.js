import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  const {authInfo} = useSelector(state => state.auth);

  const splashScreenHandler = async () => {
    try {
      if (!authInfo.token) {
        return setTimeout(() => {
          navigation.replace('LandingPage');
        }, 3000);
      }
      setTimeout(() => {
        navigation.replace('Drawer');
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    splashScreenHandler();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/background/bg-landingpage.png')}
          style={styles.image}>
          <View style={styles.mainContent}>
            <Text style={styles.text}>Welcome el-CoffeeShop</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default SplashScreen;
