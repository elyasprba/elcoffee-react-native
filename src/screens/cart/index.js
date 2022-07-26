import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from '@rneui/base';
import styles from './styles';
import {
  addToCartAction,
  removeCartAction,
} from '../../redux/actionCreator/addCart';
import {currencyFormatter} from '../../helpers/formatter';

const Cart = props => {
  const dispatch = useDispatch();
  const {addProduct} = useSelector(state => state.cart);
  const [qty, setQty] = useState(1);

  const cartHandler = () => {
    const newProduct = {...addProduct, qty};
    dispatch(addToCartAction(newProduct));
    props.navigation.navigate('delivery');
  };

  const cartHandlerBack = () => {
    props.navigation.navigate('listProduct');
  };

  const removeCartHandler = () => {
    dispatch(removeCartAction());
  };

  return (
    <>
      <View style={styles.containerCart}>
        <Pressable onPress={removeCartHandler}>
          <Text>REMOVE</Text>
        </Pressable>
        <View style={styles.containerCard}>
          {!addProduct.id ? (
            <>
              <View>
                <Text style={styles.pleaseAddInfo}>
                  Please add to cart your products
                </Text>
              </View>
            </>
          ) : (
            <>
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
                  <Text>{currencyFormatter.format(addProduct.price)}</Text>
                  <View style={styles.qtyCart}>
                    <Pressable
                      onPress={() => (qty <= 0 ? null : setQty(qty - 1))}>
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
            </>
          )}
        </View>
        <View>
          <Button buttonStyle={styles.cartBtnBack} onPress={cartHandlerBack}>
            <Text style={styles.cartTextBack}>Back To Product</Text>
          </Button>
          <Button buttonStyle={styles.cartBtn} onPress={cartHandler}>
            <Text style={styles.cartText}>Confirm</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default Cart;
