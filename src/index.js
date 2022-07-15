import {StatusBar, View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/auth';
import LandingPage from './screens/landingPage';

const Router = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigator>
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </>
  );
};

export default Router;
