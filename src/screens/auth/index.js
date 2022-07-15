import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => {
          navigation.navigate('LandingPage');
        }}>
        <Text style={{color: 'black', fontWeight: '700'}}>Back To Home</Text>
      </Button>
    </View>
  );
};

export default Login;
