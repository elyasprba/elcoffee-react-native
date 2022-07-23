import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {REACT_APP_BE_HOST} from '@env';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Button} from '@rneui/base';
import axios from 'axios';
import {userAction} from '../../redux/actionCreator/user';
import moment from 'moment';

const EditProfile = ({navigation}) => {
  const {authInfo} = useSelector(state => state.auth);
  const {userInfo} = useSelector(state => state.user);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [body, setBody] = useState({
    pict: null,
    display_name: '',
    gender: '',
    phone_number: '',
    birthday_date: '',
    address: '',
  });

  const dispatch = useDispatch();

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: msg ? msg : 'Update succsessfull',
    });
  };

  // const errorToast = () => {
  //   Toast.show({
  //     type: 'error',
  //     text1: errMsg.msg,
  //   });
  // };

  const updateProfile = async () => {
    try {
      setIsLoading(true);
      const {phone_number, display_name, address, birthday_date, gender, pict} =
        body;
      let newBody = new FormData();
      newBody.append('pict', pict);
      newBody.append('display_name', display_name);
      newBody.append('gender', gender);
      newBody.append('phone_number', phone_number);
      newBody.append('birthday_date', birthday_date);
      newBody.append('address', address);
      const config = {
        headers: {
          Authorization: `Bearer ${authInfo.token}`,
          'content-type': 'multipart/form-data',
        },
      };
      const result = await axios.patch(
        `${REACT_APP_BE_HOST}/users`,
        newBody,
        config,
      );
      console.log(result.data.msg);
      setMsg(result.data.msg);
      successToast();
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('profile');
      }, 1000);
      dispatch(userAction(authInfo.token));
      setBody(...body);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setBody(userInfo);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerEdit}>
        <View style={styles.containerPhoto}>
          <Image
            // source={user.photo ? {uri: user.photo} : ProfDef}
            source={require('../../assets/vector/profile-default.png')}
            style={styles.imageProfile}
          />
          <Pressable style={styles.btnEdit}>
            <Icon name="pencil" size={15} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.containerTextEdit}>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            placeholder="Input Your Name"
            value={body.display_name}
            onChange={e => setBody({...body, display_name: e.nativeEvent.text})}
          />
        </View>
        <View style={styles.radioBox}>
          <Pressable
            style={styles.radio}
            onPress={() => setBody({...body, gender: 'male'})}>
            <Icon
              name={
                body.gender === 'male'
                  ? 'radio-button-on-outline'
                  : 'radio-button-off-outline'
              }
              size={15}
              color={'#6A4029'}
            />
            <Text style={styles.labelGender}>Male</Text>
          </Pressable>
          <Pressable
            style={styles.radio}
            onPress={() => setBody({...body, gender: 'female'})}>
            <Icon
              name={
                body.gender === 'female'
                  ? 'radio-button-on-outline'
                  : 'radio-button-off-outline'
              }
              size={15}
              color={'#6A4029'}
            />
            <Text style={styles.labelGender}>Female</Text>
          </Pressable>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Email Address :</Text>
          <TextInput
            editable={false}
            value={userInfo.email}
            placeholder="Input your Email Address"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Phone Number :</Text>
          <TextInput
            placeholder="Input Your Number"
            value={body.phone_number}
            onChange={e => setBody({...body, phone_number: e.nativeEvent.text})}
          />
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.label}>Date of Birth :</Text>
          <View style={styles.containerDate}>
            <Text>{`${moment(userInfo.birthday_date).format(
              'DD MMMM YYYY',
            )}`}</Text>
            <Icon
              name="calendar-outline"
              size={20}
              onPress={() => setOpen(true)}
              style={styles.dateLogo}
            />
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={dateInput => {
                setOpen(false);
                setDate(dateInput);
                setBody({
                  ...body,
                  birthday_date: moment(dateInput).format('YYYY-MM-DD'),
                });
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Delivery Adress :</Text>
          <TextInput
            placeholder="Input Your Address"
            value={body.address}
            onChange={e => setBody({...body, address: e.nativeEvent.text})}
          />
        </View>
        <Button
          onPress={updateProfile}
          title="Save and Update"
          color="#6A4029"
          loading={isLoading}
          buttonStyle={styles.btnSave}
        />
      </View>
      {/* <ModalNav
                show={showModal}
                hide={() => setShowModal(!showModal)}
                navigaction={navigation}
                title={isError ? message.error : message.success}
                status={true}
                setShow={setShowModal}
            /> */}
    </ScrollView>
  );
};

export default EditProfile;
