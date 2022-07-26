import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Pressable, Text, View, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './styles';
import {logoutAction} from '../../redux/actionCreator/auth';
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.user);
  const [modalVisible, setModalVisible] = useState(false);

  const historyHandler = () => {
    props.navigation.navigate('history');
  };

  const profileHandler = () => {
    props.navigation.navigate('profile');
  };

  const productListHandler = () => {
    props.navigation.navigate('listProduct');
  };

  const createProductHandler = () => {
    props.navigation.navigate('createProduct');
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.profileContainer}>
          <Image
            source={
              userInfo.pict
                ? {uri: userInfo.pict}
                : require('../../assets/vector/profile-default.png')
            }
            style={style.profpict}
          />
          <Text style={style.username}>
            {userInfo.display_name ? userInfo.display_name : 'USERNAME'}
          </Text>
          <Text style={style.email}>{userInfo.email}</Text>
        </View>
        <View style={style.menuContainer}>
          <View style={style.menuList}>
            <Ionicons name="person-circle-outline" size={20} color="#6A4029" />
            <Text style={style.menuText} onPress={profileHandler}>
              Profile
            </Text>
          </View>
          <View style={style.menuList}>
            <Material name="cart-arrow-down" size={20} color="#6A4029" />
            <Text style={style.menuText} onPress={historyHandler}>
              History
            </Text>
          </View>
          <View style={style.menuList}>
            <Ionicons name="fast-food-outline" size={20} color="#6A4029" />
            <Text style={style.menuText} onPress={productListHandler}>
              All menu
            </Text>
          </View>
          {userInfo.role !== 'admin' ? (
            <>
              <View style={style.menuList}>
                <Ionicons name="newspaper-outline" size={20} color="#6A4029" />
                <Text style={style.menuText}>Privacy policy</Text>
              </View>
            </>
          ) : (
            <>
              <View style={style.menuList}>
                <Ionicons name="newspaper-outline" size={20} color="#6A4029" />
                <Text style={style.menuText} onPress={createProductHandler}>
                  Create Product
                </Text>
              </View>
            </>
          )}
          <View style={style.menuList}>
            <Awesome5 name="shield-alt" size={20} color="#6A4029" />
            <Text style={style.menuText}>Security</Text>
          </View>
        </View>
        <Pressable
          style={style.menuList}
          onPress={() => {
            setModalVisible(true);
            // dispatch(logoutAction());
            // props.navigation.navigate('LandingPage');
          }}>
          <Material name="logout" size={20} color="#6A4029" />
          <Text style={style.menuText}>Logout</Text>
        </Pressable>
        <View style={style.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <View style={style.modalTitle}>
                  <Text style={style.textTitle}>
                    Are you sure you want to leave?
                  </Text>
                </View>
                <View style={style.modalBtn}>
                  <Pressable
                    style={style.buttonLogout}
                    onPress={() => {
                      setModalVisible(!modalVisible), dispatch(logoutAction());
                      props.navigation.navigate('LandingPage');
                    }}>
                    <Text style={style.textStyle}>Logout</Text>
                  </Pressable>
                  <Pressable
                    style={style.buttonCancel}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={style.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
}

export default MyDrawer;
