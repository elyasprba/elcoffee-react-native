import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@rneui/base';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';

const Delivery = props => {
  const {userInfo} = useSelector(state => state.auth);
  const {
    addProduct: {price},
  } = useSelector(state => state.cart);
  const [methods, setMethods] = useState('');

  const deliveriHandler = () => {
    props.navigation.navigate('payment');
  };

  return (
    <View style={styles.paymnetContainer}>
      <Text style={styles.titlePage}>Delivery</Text>
      <View style={styles.rowAddress}>
        <Text style={styles.titleAddress}>Address details</Text>
      </View>
      <View style={styles.addressCard}>
        <Text style={styles.textAddress}>{userInfo.name}</Text>
        <Text style={styles.textAddress}>{userInfo.address}</Text>
        <Text style={styles.textAddress}>{userInfo.phone_number}</Text>
      </View>
      <View style={styles.deliveryCard}>
        <View style={styles.wrapBtnSize}>
          <Button
            onPress={() => setMethods('Door delivery')}
            size="sm"
            title="Door delivery"
            color="#FFBA33"
            buttonStyle={
              methods === 'Door delivery' ? styles.btnActive : styles.btnSize
            }
          />
          <Button
            onPress={() => setMethods('Pick up at store')}
            size="sm"
            title="Pick up at store"
            color="#FFBA33"
            buttonStyle={
              methods === 'Pick up at store' ? styles.btnActive : styles.btnSize
            }
          />
          <Button
            onPress={() => setMethods('Dine in')}
            size="sm"
            title="Dine in"
            color="#FFBA33"
            buttonStyle={
              methods === 'Dine in' ? styles.btnActive : styles.btnSize
            }
          />
        </View>
      </View>
      <View style={styles.rowTotal}>
        <Text>Total</Text>
        <Text style={styles.titleAddress}>IDR {price}</Text>
      </View>
      <Button
        onPress={deliveriHandler}
        title="Proceed to payment"
        color="#6A4029"
        buttonStyle={styles.btnCheckout}
      />
      {/* <Pressable
        onPress={deliveriHandler}
        color="#6A4029"
        buttonStyle={styles.btnConfirm}>
        <Text>Confirm and Checkout</Text>
      </Pressable> */}
    </View>
  );
};

export default Delivery;
