import {View, Image, Pressable} from 'react-native';
import React from 'react';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function Header({navigation}) {
  const {userInfo} = useSelector(state => state.user);
  const {addProduct} = useSelector(state => state.cart);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
        backgroundColor: '#F2F2F2',
      }}>
      <IconAwesome
        name="bars"
        size={25}
        style={{flex: 3}}
        color="#000000"
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
          // navigation.toggleDrawer()
          // navigation.openDrawer()
        }}
      />
      {/* <Text>Header</Text> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 2,
          justifyContent: 'space-between',
        }}>
        <IconIonicons name="chatbubble-outline" size={25} color="#9F9F9F" />
        {!addProduct.id ? (
          <>
            <IconIonicons
              name="cart-outline"
              size={25}
              color="#9F9F9F"
              onPress={() => {
                navigation.navigate('cart');
              }}
            />
          </>
        ) : (
          <>
            <IconIonicons
              name="cart-outline"
              size={25}
              color="#6A4029"
              onPress={() => {
                navigation.navigate('cart');
              }}
            />
          </>
        )}
        <Pressable
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Image
            source={
              userInfo.pict
                ? {uri: userInfo.pict}
                : require('../assets/vector/profile-default.png')
            }
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
}
