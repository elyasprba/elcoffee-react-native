import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSelector, useDispatch} from 'react-redux';
import {removeCartAction} from '../../redux/actionCreator/addCart';
import axios from 'axios';
import style from './styles';
import {REACT_APP_BE_HOST} from '@env';
import {sendLocalNotification} from '../../helpers/notification';
import {Button} from '@rneui/base';
import {currencyFormatter} from '../../helpers/formatter';
import Toast from 'react-native-toast-message';

const Payment = props => {
  const {
    addProduct: {price, name, qty, size, pict, id},
  } = useSelector(state => state.cart);
  const {authInfo} = useSelector(state => state.auth);
  const {userInfo} = useSelector(state => state.user);
  const [payment, setPayment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const tax = 10000;
  const shipping = 10000;

  const dispatch = useDispatch();

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Please input payment method',
    });
  };

  const addPayment = async () => {
    try {
      setIsLoading(true);
      if (payment === '') {
        setIsLoading(false);
        return errorToast();
      }
      const body = {
        name_products: id,
        qty: qty,
        size: size,
        subtotal: parseInt(qty) * parseInt(price),
        tax: tax,
        shipping: shipping,
        total:
          parseInt(qty) * parseInt(price) + parseInt(tax) + parseInt(shipping),
        users_id: userInfo.id,
      };

      const config = {headers: {Authorization: `Bearer ${authInfo.token}`}};
      const result = await axios.post(
        `${REACT_APP_BE_HOST}/transactions`,
        body,
        config,
      );
      setIsLoading(false);
      sendLocalNotification(
        'Payment Success',
        'Thank you for shopping at el-CoffeeShop',
      );
      props.navigation.navigate('Home');
      dispatch(removeCartAction());
      setPayment('');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <View style={style.subtitleContainer}>
            <Text style={style.subtitle}>Products</Text>
          </View>
          <View style={style.card}>
            <Image
              source={
                pict
                  ? {uri: pict}
                  : require('../../assets/vector/products-default.png')
              }
              style={style.img}
            />
            <View style={style.productInfo}>
              <Text style={style.item}>{name}</Text>
              <Text style={style.item}>{qty}</Text>
              <Text style={style.item}>
                {size === 'R'
                  ? `Regular (${size})`
                  : null || size === 'L'
                  ? `Large (${size})`
                  : null || size === 'XL'
                  ? `Extra Larger (${size})`
                  : null}
              </Text>
            </View>
            <Text style={style.price}>{currencyFormatter.format(price)}</Text>
          </View>
          <View style={style.subtitleContainer}>
            <Text style={style.subtitle}>Payment method</Text>
          </View>
          <View style={style.methodCard}>
            <Text style={style.delivery} onPress={() => setPayment('1')}>
              <Octicons
                name={payment === '1' ? 'dot-fill' : 'dot'}
                size={15}
                color={'#6A4029'}
              />{' '}
              Card
            </Text>
            <View style={style.border}></View>
            <Text style={style.delivery} onPress={() => setPayment('2')}>
              <Octicons
                name={payment === '2' ? 'dot-fill' : 'dot'}
                size={15}
                color={'#6A4029'}
              />{' '}
              Bank account
            </Text>
            <View style={style.border}></View>
            <Text style={style.delivery} onPress={() => setPayment('3')}>
              <Octicons
                name={payment === '3' ? 'dot-fill' : 'dot'}
                size={15}
                color={'#6A4029'}
              />{' '}
              Cash on delivery
            </Text>
          </View>
          <View style={style.totalContainer}>
            <Text style={style.subtitleSecond}>SubTotal</Text>
            <Text style={style.subtitleSecond}>
              {currencyFormatter.format(parseInt(qty) * parseInt(price))}
            </Text>
          </View>
          <View style={style.totalContainer}>
            <Text style={style.subtitleSecond}>Tax</Text>
            <Text style={style.subtitleSecond}>
              {currencyFormatter.format(parseInt(tax))}
            </Text>
          </View>
          <View style={style.totalContainer}>
            <Text style={style.subtitleSecond}>Shipping</Text>
            <Text style={style.subtitleSecond}>
              {currencyFormatter.format(parseInt(shipping))}
            </Text>
          </View>
          <View style={style.totalContainer}>
            <Text style={style.subtitle}>Total</Text>
            <Text style={style.subtitle}>
              {currencyFormatter.format(
                parseInt(qty) * parseInt(price) +
                  parseInt(tax) +
                  parseInt(shipping),
              )}
            </Text>
          </View>
          <View style={style.subtitleContainer}>
            <Text style={style.subtitle}>My Card</Text>
          </View>
          <Image
            source={require('../../assets/vector/card-bank.png')}
            style={style.cardBank}
          />
          <Button
            buttonStyle={style.paymentBtn}
            loading={isLoading}
            onPress={addPayment}>
            <Text style={style.paymentTxt}>Proceed payment</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default Payment;
