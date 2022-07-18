import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './styles';
// import {logoutAction} from '../../redux/actionCreators/auth';
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  const dispatch = useDispatch();
  const {
    payload: {name, email, pict},
  } = useSelector(state => state.auth.userInfo.data);
  const picture = pict.replace('\\');

  return (
    <>
      <View style={style.container}>
        <View style={style.profileContainer}>
          <Image
            source={
              picture
                ? {uri: picture}
                : require('../../assets/vector/profile-default.png')
            }
            style={style.profpict}
          />
          <Text style={style.username}>{name}</Text>
          <Text style={style.email}>{email}</Text>
        </View>
        <View style={style.menuContainer}>
          <View style={style.menuList}>
            <Ionicons name="person-circle-outline" size={20} color="#6A4029" />
            <Text style={style.menuText}>Edit Profile</Text>
          </View>
          <View style={style.menuList}>
            <Material name="cart-arrow-down" size={20} color="#6A4029" />
            <Text style={style.menuText}>Orders</Text>
          </View>
          <View style={style.menuList}>
            <Ionicons name="fast-food-outline" size={20} color="#6A4029" />
            <Text style={style.menuText}>All menu</Text>
          </View>
          <View style={style.menuList}>
            <Ionicons name="newspaper-outline" size={20} color="#6A4029" />
            <Text style={style.menuText}>Privacy policy</Text>
          </View>
          <View style={style.menuList}>
            <Awesome5 name="shield-alt" size={20} color="#6A4029" />
            <Text style={style.menuText}>Security</Text>
          </View>
        </View>
        <Pressable style={style.menuList}>
          <Material name="logout" size={20} color="#6A4029" />
          <Text style={style.menuText}>Logout</Text>
        </Pressable>
        {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem />
      </DrawerContentScrollView> */}
      </View>
    </>
  );
}

export default MyDrawer;
