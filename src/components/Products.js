import {Pressable, View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function CardProduct({navigation, id, name, price, pict}) {
  return (
    <Pressable
      style={style.card}
      key={id}
      onPress={() => {
        navigation.navigate('productDetail', {id});
      }}>
      <Image
        source={
          pict ? {uri: pict} : require('../assets/vector/products-default.png')
        }
        style={style.img}
      />
      <View style={style.textContainer}>
        <Text style={style.name}>{name ? name : 'Name Not Available'}</Text>
        <Text style={style.price}>
          IDR {price ? price : 'Price Not Available'}
        </Text>
      </View>
    </Pressable>
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
    marginRight: 20,
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
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },

  price: {
    fontSize: 17,
    textAlign: 'center',
    color: '#6A4029',
  },
});
