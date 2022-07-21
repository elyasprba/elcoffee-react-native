import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {addToCartAction} from '../../redux/actionCreator/addCart';

const Cart = props => {
  const dispatch = useDispatch();
  const {addProduct} = useSelector(state => state.cart);
  const [qty, setQty] = useState(1);
  // console.log(qty);

  const cartHandler = () => {
    const newProduct = {...addProduct, qty};
    dispatch(addToCartAction(newProduct));
    props.navigation.navigate('delivery');
  };

  return (
    <>
      <View style={styles.containerCart}>
        <View style={styles.containerCard}>
          <Image
            source={
              addProduct.pict
                ? {uri: addProduct.pict}
                : require('../../assets/vector/products-default.png')
            }
            style={styles.imageCart}
          />
          <View>
            <Text style={styles.titleCart}>{addProduct.name}</Text>
            <Text style={styles.sizeCart}>
              {addProduct.size === 'R'
                ? `Regular (${addProduct.size})`
                : null || addProduct.size === 'L'
                ? `Large (${addProduct.size})`
                : null || addProduct.size === 'XL'
                ? `Extra Larger (${addProduct.size})`
                : null}
            </Text>
            <View style={styles.addInfo}>
              <Text>IDR. {addProduct.price}</Text>
              <View style={styles.qtyCart}>
                <Pressable onPress={() => (qty <= 0 ? null : setQty(qty - 1))}>
                  <Ant name="minus" color="white" />
                </Pressable>
                <Text style={styles.qty}>{qty}</Text>
                <Pressable
                  onPress={() => {
                    setQty(qty + 1);
                  }}>
                  <Ant name="plus" color="white" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          onPress={cartHandler}
          title="Confirm and Checkout"
          color="#6A4029"
          buttonStyle={styles.btnConfirm}>
          <Text>Confirm and Checkout</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Cart;
