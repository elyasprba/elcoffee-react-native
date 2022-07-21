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

const Register = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    phone_number: '',
  });

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Login Success',
    });
  };

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Email, Password and Phone Number Invalid',
    });
  };

  const handleRegister = () => {
    const body = {
      email: input.email,
      password: input.password,
      phone_number: input.phone_number,
    };
    registerAxios(body)
      .then(_ => {
        // console.log('SUCCESS =',result.data.data.msg);
        successToast();
        setInput({...input, email: '', password: '', phone_number: ''});
      })
      .catch(_ => {
        // console.log('ERROR =', err.response.data.msg);
        errorToast();
      });
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
              placeholder="Enter your email phone number"
              onChangeText={phone_number => setInput({...input, phone_number})}
            />

            <Pressable onPress={() => {}}>
              <Text style={styles.forgot}>Login?</Text>
            </Pressable>
            <Button buttonStyle={styles.loginBtn} onPress={handleRegister}>
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
