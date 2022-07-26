import {View, Text, ImageBackground, TextInput} from 'react-native';
import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {REACT_APP_BE_HOST} from '@env';
import style from './styles';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function Forgot({navigation}) {
  const [page, setPage] = useState('forgot');
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [info, setInfo] = useState('');
  const [input, setInput] = useState({
    email: '',
    newPassword: '',
    newPasswordSec: '',
    confirmCode: '',
  });

  const successSend = () => {
    Toast.show({
      type: 'info',
      text1: info ? info : 'Please check your email for password confirmation',
    });
  };

  const successUpdate = () => {
    Toast.show({
      type: 'success',
      text1: 'Your Password successfully recovered',
    });
  };

  const errorUpdate = () => {
    Toast.show({
      type: 'error',
      text1: 'Invalid Confirmation Code !',
    });
  };

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Password don`t match',
    });
  };

  const forgotHandler = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        `${REACT_APP_BE_HOST}/auth/forgot-password/${input.email}`,
      );
      setIsLoading(false);
      setInfo(result.data.msg);
      successSend();

      setTimeout(() => {
        setPage('tes');
      }, 2000);

      // console.log(result.data.msg);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const cofirmPassword = async () => {
    try {
      setIsLoading(true);
      if (input.newPassword !== input.newPasswordSec) {
        return setTimeout(() => {
          setIsLoading(false);
          errorToast();
        }, 1000);
      }
      const body = {
        email: input.email,
        newPassword: input.newPassword,
        confirmCode: input.confirmCode,
      };
      const result = await axios.patch(
        `${REACT_APP_BE_HOST}/users/update-password`,
        body,
      );
      setTimeout(() => {
        setIsLoading(false);
        successUpdate();
        navigation.navigate('Login');
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      errorUpdate();
    }
  };

  return (
    <>
      {page === 'forgot' ? (
        <>
          <ImageBackground
            source={require('../../assets/background/bg-forgot.png')}
            style={{flex: 1}}>
            <View style={style.overLay}>
              <View style={style.topText}>
                <Text style={style.textWellcome}>Don’t Worry!</Text>
                <Text style={style.text}>
                  Enter your email adress to get reset password link
                </Text>
              </View>
              <View>
                <TextInput
                  style={style.textInput}
                  onChangeText={email => setInput({...input, email})}
                  placeholder="Enter your email adress"
                  placeholderTextColor={'#FFFFFF'}
                />
                <Button
                  onPress={() => {
                    forgotHandler();
                  }}
                  loading={isLoading}
                  // style={style.btn}
                  buttonStyle={style.btn}>
                  <Text
                    style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
                    Send Link
                  </Text>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </>
      ) : (
        <>
          <ImageBackground
            source={require('../../assets/background/bg-forgot.png')}
            style={{flex: 1}}>
            <View style={style.overLay}>
              <View style={style.topText}>
                <Text style={style.textWellcome}>Keep Calm!</Text>
                <Text style={style.text}>
                  Enter your new password and confirm code reset password
                </Text>
              </View>
              <View>
                <TextInput
                  style={style.textInput}
                  value={input.newPassword}
                  onChangeText={newPassword =>
                    setInput({...input, newPassword})
                  }
                  placeholder="Enter your password"
                  placeholderTextColor={'#FFFFFF'}
                  secureTextEntry={true}
                />
                <TextInput
                  style={style.textInput}
                  value={input.newPasswordSec}
                  onChangeText={newPasswordSec =>
                    setInput({...input, newPasswordSec})
                  }
                  placeholder="Enter your confirm password"
                  placeholderTextColor={'#FFFFFF'}
                  secureTextEntry={true}
                />
                <TextInput
                  style={style.textInput}
                  value={input.confirmCode}
                  onChangeText={confirmCode =>
                    setInput({...input, confirmCode})
                  }
                  placeholder="Enter your confirm code"
                  placeholderTextColor={'#FFFFFF'}
                />
                <Button
                  onPress={() => {
                    cofirmPassword();
                  }}
                  loading={isLoading}
                  buttonStyle={style.btn}>
                  <Text
                    style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
                    Reset Password
                  </Text>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </>
      )}
    </>
  );
}
