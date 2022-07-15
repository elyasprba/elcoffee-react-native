import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
// import {Button} from '@rneui/themed';

import styles from './landingPage';

const LandingPage = ({navigation}) => {
  return (
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
                  navigation.navigate('Login');
                }}>
                <Text style={styles.getStarted}>Get started</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default LandingPage;
