import {StatusBar, View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from './screens/landingPage';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

const Router = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigator>
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </>
  );
};

export default Router;
