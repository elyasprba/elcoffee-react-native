import {View, Text, ImageBackground, Pressable} from 'react-native';
import React, {useState} from 'react';
// import {Button} from '@rneui/themed';

import styles from './landingPage';

const LandingPage = ({navigation}) => {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'home' ? (
        <>
          <View style={styles.container}>
            <ImageBackground
              source={require('../../assets/background/bg-landingpage.png')}
              style={styles.image}>
              <View style={styles.mainContent}>
                <Text style={styles.text}>Coffee for Everyone</Text>
                <View>
                  <Pressable
                    style={styles.btnStarted}
                    onPress={() => {
                      setPage('welcome');
                    }}>
                    <Text style={styles.getStarted}>Get started</Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
        </>
      ) : (
        <>
          <View style={styles.container}>
            <ImageBackground
              source={require('../../assets/background/bg-login-register.png')}
              style={styles.imageWelcome}>
              <View style={styles.mainContent}>
                <View style={styles.mainTitle}>
                  <Text style={styles.text}>Welcome!</Text>
                  <Text style={styles.textDesc}>
                    Get a cup of coffee for free every sunday morning
                  </Text>
                </View>
                <View style={styles.btnContainer}>
                  <Pressable
                    style={styles.btnNewAccount}
                    onPress={() => {
                      navigation.navigate('Register');
                    }}>
                    <Text style={styles.createNewAccount}>
                      Create New Account
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnStarted}
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    <Text style={styles.getStarted}>Login</Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
        </>
      )}
    </>
  );
};

export default LandingPage;
