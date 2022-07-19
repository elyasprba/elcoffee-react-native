import {View, Text, ImageBackground, TextInput, Pressable} from 'react-native';

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../redux/actionCreator/auth';

import styles from './styles';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const {isSuccess} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const body = {
      email: input.email,
      password: input.password,
    };

    dispatch(loginAction(body))
      .then(_ => {
        navigation.navigate('Drawer');
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isSuccess === true) {
      navigation.navigate('Drawer');
    }
  }, [isSuccess]);

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
                  Login
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
