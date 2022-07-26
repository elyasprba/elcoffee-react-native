import {View, Text, TextInput} from 'react-native';
import {Button} from '@rneui/base';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {REACT_APP_BE_HOST} from '@env';
import Toast from 'react-native-toast-message';
import {logoutAction} from '../../redux/actionCreator/auth';

import styles from './styles';

const EditPassword = props => {
  const dispatch = useDispatch();
  const {authInfo} = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    password: '',
    conPassword: '',
  });

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Password don`t match',
    });
  };

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Update successfull, Login again!!!',
    });
  };

  const editPasswordHandler = async () => {
    try {
      setIsLoading(true);
      if (input.password !== input.conPassword) {
        return setTimeout(() => {
          setIsLoading(false);
          errorToast();
        }, 1000);
      }
      const body = {
        password: input.password,
      };
      const config = {headers: {Authorization: `Bearer ${authInfo.token}`}};
      const result = await axios.patch(
        `${REACT_APP_BE_HOST}/users/edit-password`,
        body,
        config,
      );
      setIsLoading(false);
      successToast();
      dispatch(logoutAction());
      props.navigation.navigate('Login');
      setInput({password: '', conPassword: ''});
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Your new password :</Text>
        <View style={styles.containerInputPassword}>
          <TextInput
            secureTextEntry={true}
            value={input.password}
            placeholder="Input your new password"
            style={styles.inputPassword}
            onChangeText={password => setInput({...input, password})}
          />
        </View>
        <Text>Your confirm password :</Text>
        <View style={styles.containerInputPassword}>
          <TextInput
            secureTextEntry={true}
            value={input.conPassword}
            placeholder="Input your confirm password"
            style={styles.inputPassword}
            onChangeText={conPassword => setInput({...input, conPassword})}
          />
        </View>
        <Button
          buttonStyle={styles.btn}
          loading={isLoading}
          onPress={() => {
            editPasswordHandler();
          }}>
          Save Changes
        </Button>
      </View>
    </>
  );
};

export default EditPassword;
