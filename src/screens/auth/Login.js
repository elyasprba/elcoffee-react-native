import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

import React, {useState} from 'react';
import {loginAxios} from '../../modules/auth';

import styles from './styles';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const body = {
      email: input.email,
      password: input.password,
    };
    loginAxios(body)
      .then(result => {
        console.log(result.data.data.msg);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/background/bg-login.png')}
          style={styles.imageRegister}>
          <View style={styles.mainContent}>
            <View style={styles.mainTitle}>
              <Text style={styles.text}>Login</Text>
            </View>

            <View style={styles.boxInput}>
              <TextInput
                value={input.email}
                style={styles.inputField}
                placeholder="Enter your email adress"
                onChangeText={email => setInput({...input, email})}
              />
            </View>

            <View style={styles.boxInput}>
              <TextInput
                value={input.password}
                style={styles.inputField}
                placeholder="Enter your password"
                onChangeText={password => setInput({...input, password})}
              />
            </View>

            <View style={styles.btnContainer}>
              <Pressable style={styles.btnCreateAccount}>
                <Text style={styles.createAccount} onPress={handleLogin}>
                  Create Account
                </Text>
              </Pressable>
              <Pressable style={styles.btnCreateAccountGoogle}>
                <Text style={styles.createAccountGoogle}>
                  Create with Google
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Login;
