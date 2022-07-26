import {Pressable, View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {currencyFormatter} from '../helpers/formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

export default function CardProduct({navigation, id, name, price, pict}) {
  const {userInfo} = useSelector(state => state.user);

  return (
    <>
      <View>
        <Pressable
          style={style.card}
          key={id}
          onPress={() => {
            navigation.navigate('productDetail', {id});
          }}>
          <Image
            source={
              pict
                ? {uri: pict}
                : require('../assets/vector/products-default.png')
            }
            style={style.img}
          />
          {userInfo.role !== 'admin' ? (
            <></>
          ) : (
            <>
              <Pressable
                style={style.btnEdit}
                key={id}
                onPress={() => {
                  navigation.navigate('editProduct', {id});
                }}>
                <Icon name="pencil" size={20} color="white" />
              </Pressable>
            </>
          )}

          <View style={style.textContainer}>
            <Text style={style.name}>{name ? name : 'Name Not Available'}</Text>
            <Text style={style.price}>
              {currencyFormatter.format(price)
                ? currencyFormatter.format(price)
                : 'Price Not Available'}
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    width: 150,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 25,
    marginBottom: 10,
  },

  img: {
    width: 130,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15,
  },

  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  name: {
    fontSize: 17,
    textAlign: 'center',
    color: '#000000',
  },

  price: {
    fontSize: 17,
    textAlign: 'center',
    color: '#6A4029',
  },
  btnEdit: {
    width: 35,
    height: 35,
    backgroundColor: '#6A4029',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    // top: 10,
    left: 110,
  },
});
