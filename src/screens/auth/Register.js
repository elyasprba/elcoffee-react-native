import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {registerAxios} from '../../modules/auth';
import {Button} from '@rneui/base';
import Toast from 'react-native-toast-message';

import styles from './styles';

const Register = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    email: '',
    password: '',
    phone_number: '',
  });

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Register Success',
    });
  };

  const errorToast = msg => {
    Toast.show({
      type: 'error',
      text1: msg,
    });
  };

  const handleRegister = () => {
    setIsLoading(true);
    const emailFormatter = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const passwordFormatter = /(?=.*[0-8])/;
    const phoneFormatter = /^\d{10}$/;

    if (!input.email.match(emailFormatter)) {
      return setTimeout(() => {
        setIsLoading(false);
        errorToast('Email format should be mail@mail.com!');
      }, 2000);
    }
    if (input.password.length < 8) {
      return setTimeout(() => {
        setIsLoading(false);
        errorToast('Password minimum 8 characters!');
      }, 2000);
    }
    if (!input.password.match(passwordFormatter)) {
      return setTimeout(() => {
        setIsLoading(false);
        errorToast('Password must use 1 numeric character!');
      }, 2000);
    }
    if (!input.phone_number.match(phoneFormatter)) {
      return setTimeout(() => {
        setIsLoading(false);
        errorToast('Not a valid Phone Number!');
      }, 2000);
    }

    const body = {
      email: input.email,
      password: input.password,
      phone_number: input.phone_number,
    };

    registerAxios(body)
      .then(_ => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          successToast();
          navigation.navigate('Login');
          setInput({...input, email: '', password: '', phone_number: ''});
        }, 2000);
      })
      .catch(_ => {
        setIsLoading(false);
        errorToast('Email password and phone number cannot be empty');
      });
    setIsLoading(false);
  };

  return (
    <>
      <ImageBackground
        source={require('../../assets/background/bg-register.png')}
        style={styles.imageBg}>
        <View style={styles.imageBgClr}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleRegister}>Sign Up</Text>
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
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={password => setInput({...input, password})}
            />
            <TextInput
              value={input.phone_number}
              style={styles.input}
              placeholderTextColor="#cccccc"
              placeholder="Enter your phone number"
              onChangeText={phone_number => setInput({...input, phone_number})}
            />

            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.forgot}>Login?</Text>
            </Pressable>
            <Button
              buttonStyle={styles.loginBtn}
              loading={isLoading}
              onPress={handleRegister}>
              <Text style={styles.loginText}>Create Account</Text>
            </Button>
            <Pressable style={styles.gbutton}>
              <Image style={styles.google} />
              <Text style={styles.gbuttonText}>Create with Google</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Register;
