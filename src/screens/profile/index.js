import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './styles';
import {useSelector} from 'react-redux';
import Header from '../../components/Headers';

const Profile = props => {
  const {userInfo} = useSelector(state => state.user);

  return (
    <>
      <ScrollView>
        <Header {...props} />
        <View style={style.container}>
          <Text style={style.title}>My Profile</Text>
          <View style={style.subtitleContainer}>
            <Text style={style.subtitle}>Your Information</Text>
            <Text
              style={style.edit}
              onPress={() => props.navigation.navigate('editProfile')}>
              edit
            </Text>
          </View>
          <View style={style.card}>
            <Image
              source={
                userInfo.pict
                  ? {uri: userInfo.pict}
                  : require('../../assets/vector/profile-default.png')
              }
              style={style.profpict}
            />
            <View style={style.info}>
              <Text style={style.name}>Display Name</Text>
              <Text style={style.email}>{userInfo.display_name}</Text>
              <View style={style.border}></View>
              <Text style={style.email}>{userInfo.phone_number}</Text>
              <View style={style.border}></View>
              <Text style={style.email}>{userInfo.address}</Text>
            </View>
          </View>
          <Pressable
            style={style.menuCard}
            onPress={() => props.navigation.navigate('history')}>
            <Text style={style.menu}>Order History</Text>
            <Awesome5 name="chevron-right" size={20} />
          </Pressable>
          <Pressable
            style={style.menuCard}
            onPress={() => props.navigation.navigate('editPassword')}>
            <Text style={style.menu}>Edit Password</Text>
            <Awesome5 name="chevron-right" size={20} />
          </Pressable>
          <View style={style.menuCard}>
            <Text style={style.menu}>FAQ</Text>
            <Awesome5 name="chevron-right" size={20} />
          </View>
          <View style={style.menuCard}>
            <Text style={style.menu}>Help</Text>
            <Awesome5 name="chevron-right" size={20} />
          </View>
          <Pressable
            style={style.saveBtn}
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <Text style={style.saveTxt}>Back To Home</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
