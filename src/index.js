import 'react-native-gesture-handler';
import {StatusBar, View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ion from 'react-native-vector-icons/Ionicons';
import MyDrawer from './screens/Drawer';
import LandingPage from './screens/landingPage';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Home from './screens/home';
import ProductDetail from './screens/productDetail';
import Cart from './screens/cart';
import Delivery from './screens/delivery';
import Payment from './screens/payment';
import History from './screens/history';
import Profile from './screens/profile';

const Drawer = createDrawerNavigator();

const DrawerNav = ({navigation}) => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => <MyDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="productDetail"
        component={ProductDetail}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: 'Product Detail',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('Home');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="cart"
        component={Cart}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: 'Cart',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('productDetail');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="delivery"
        component={Payment}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: 'Payment',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('cart');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="payment"
        component={Delivery}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: 'delivery',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('cart');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="history"
        component={History}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: 'History',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('Home');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: 'Profile',
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <Ion
                onPress={() => {
                  navigation.navigate('Home');
                }}
                name="chevron-back-outline"
                size={20}
                color="black"
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Router = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigator>
        <Screen
          name="LandingPage"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Screen name="Login" component={Login} options={{headerShown: false}} />
        <Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Screen
          name="Drawer"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Navigator>
    </>
  );
};

export default Router;
