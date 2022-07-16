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

import styles from './styles';

const Register = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    phone_number: '',
  });

  const handleRegister = () => {
    const body = {
      email: input.email,
      password: input.password,
      phone_number: input.phone_number,
    };
    registerAxios(body)
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
          source={require('../../assets/background/bg-register.png')}
          style={styles.imageRegister}>
          <View style={styles.mainContent}>
            <View style={styles.mainTitle}>
              <Text style={styles.text}>SignUp</Text>
            </View>

            <View style={styles.boxInput}>
              <TextInput
                value={input.email}
                style={styles.inputField}
                onChangeText={email => setInput({...input, email})}
                placeholder="Enter your email"
              />
            </View>

            <View style={styles.boxInput}>
              <TextInput
                value={input.password}
                style={styles.inputField}
                onChangeText={password => setInput({...input, password})}
                placeholder="Enter your password"
              />
            </View>

            <View style={styles.boxInput}>
              <TextInput
                value={input.phone_number}
                style={styles.inputField}
                onChangeText={phone_number =>
                  setInput({...input, phone_number})
                }
                placeholder="Enter your phone number"
              />
            </View>

            <View style={styles.btnContainer}>
              <Pressable style={styles.btnCreateAccount}>
                <Text style={styles.createAccount} onPress={handleRegister}>
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

export default Register;
