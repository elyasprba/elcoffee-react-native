import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  ToastAndroid,
  Image,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../redux/actionCreator/auth';

import styles from './styles';
import {Button} from '@rneui/base';

const Login = ({navigation}) => {
  const {isSuccess, isLoading, errMsg} = useSelector(state => state.auth);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const successToast = () => {
    ToastAndroid.showWithGravity(
      'Login Success',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  const errorToast = () => {
    ToastAndroid.showWithGravity(
      errMsg.msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const handleLogin = async () => {
    const body = {
      email: input.email,
      password: input.password,
    };

    dispatch(loginAction(body))
      .then(_ => {
        successToast();
        navigation.navigate('Drawer');
        setInput({...input, email: '', password: ''});
      })
      .catch(_ => {
        errorToast();
      });
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Drawer');
    }
  }, [isSuccess]);

  return (
    <>
      <ImageBackground
        source={require('../../assets/background/bg-login.png')}
        style={styles.imageBg}>
        <View style={styles.imageBgClr}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.btmContainer}>
            <TextInput
              value={input.email}
              style={styles.input}
              placeholderTextColor="#cccccc"
              placeholder="Enter your email adress"
              onChangeText={email => setInput({...input, email})}
            />
            <TextInput
              value={input.password}
              style={styles.input}
              placeholderTextColor="#cccccc"
              placeholder="Enter your password adress"
              secureTextEntry={true}
              onChangeText={password => setInput({...input, password})}
            />

            <Pressable onPress={() => {}}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </Pressable>
            <Button
              buttonStyle={styles.loginBtn}
              loading={isLoading}
              onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </Button>

            <Pressable style={styles.gbutton}>
              <Image style={styles.google} />
              <Text style={styles.gbuttonText}>Login with Google</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Login;
