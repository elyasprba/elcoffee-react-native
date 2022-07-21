import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';

import style from './styles';

const Profile = () => {
  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.title}>My Profile</Text>
          <View style={style.subtitleContainer}>
            <Text style={style.subtitle}>Your Information</Text>
            <Text style={style.edit}>edit</Text>
          </View>
          <View style={style.card}>
            <Image
              source={require('../../assets/vector/profile-default.png')}
              style={style.profpict}
            />
            <View style={style.info}>
              <Text style={style.name}>Display Name</Text>
              <Text style={style.email}>zulaikha17@gmail.com</Text>
              <View style={style.border}></View>
              <Text style={style.email}>+62 81348287878</Text>
              <View style={style.border}></View>
              <Text style={style.email}>
                Iskandar Street Block A Number 102
              </Text>
            </View>
          </View>
          <Pressable
            style={style.menuCard}
            onPress={() => props.navigation.navigate('history')}>
            <Text style={style.menu}>Order History</Text>
            <Awesome5 name="chevron-right" size={20} />
          </Pressable>
          <View style={style.menuCard}>
            <Text style={style.menu}>Edit Password</Text>
            <Awesome5 name="chevron-right" size={20} />
          </View>
          <View style={style.menuCard}>
            <Text style={style.menu}>FAQ</Text>
            <Awesome5 name="chevron-right" size={20} />
          </View>
          <View style={style.menuCard}>
            <Text style={style.menu}>Help</Text>
            <Awesome5 name="chevron-right" size={20} />
          </View>
          <Pressable style={style.saveBtn}>
            <Text style={style.saveTxt}>Save Change</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
