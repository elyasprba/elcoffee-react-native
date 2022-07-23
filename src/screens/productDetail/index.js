import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@rneui/base';
import axios from 'axios';
import style from './styles';
import {useDispatch} from 'react-redux';
import {addToCartAction} from '../../redux/actionCreator/addCart';
import {REACT_APP_BE_HOST} from '@env';

const ProductDetail = props => {
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [product, setProduct] = useState({});

  const productDetail = async () => {
    try {
      const id = props.route.params.id;
      const result = await axios.get(`${REACT_APP_BE_HOST}/products/${id}`);
      setProduct(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productDetail();
    setSize('');
  }, [props.route.params.id]);

  const addCartHandler = () => {
    const newProduct = {...product, size};
    dispatch(addToCartAction(newProduct));
    props.navigation.navigate('cart');
  };

  return (
    <>
      <View>
        <ScrollView>
          <View style={style.containerDetail}>
            <Image
              source={
                product.pict
                  ? {uri: product.pict}
                  : require('../../assets/vector/products-default.png')
              }
              style={style.image}
            />
            <Text style={style.titleName}>{product.name}</Text>
            <Text style={style.price}>IDR. {product.price}</Text>
          </View>
          <View style={style.deliveryInfo}>
            <Text style={style.titleDelivery}>Delivery Info</Text>
            <Text style={style.descDelivery}>
              Delivered only on monday until friday from
            </Text>
            <Text style={style.titleDesc}>Description</Text>
            <Text style={style.descDelivery}>{product.description}</Text>
          </View>
          <View style={style.wrapBtnSize}>
            <Button
              onPress={() => setSize('R')}
              size="sm"
              title="R"
              color="#FFBA33"
              buttonStyle={size === 'R' ? style.btnActive : style.btnSize}
            />
            <Button
              onPress={() => setSize('L')}
              size="sm"
              title="L"
              color="#FFBA33"
              buttonStyle={size === 'L' ? style.btnActive : style.btnSize}
            />
            <Button
              onPress={() => setSize('XL')}
              size="sm"
              title="XL"
              color="#FFBA33"
              buttonStyle={size === 'XL' ? style.btnActive : style.btnSize}
            />
          </View>
          <View style={style.deliveryInfo}>
            {size === '' ? (
              <Pressable style={style.btnAddCartDisable}>
                <Text style={style.addCart}>Add to cart</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={
                  // props.navigation.navigate('cart');
                  addCartHandler
                }
                style={style.btnAddCart}>
                <Text style={style.addCart}>Add to cart</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductDetail;
