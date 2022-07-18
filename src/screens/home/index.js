import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import style from './styles';
import CardProduct from '../../components/Products';
import Header from '../../components/Headers';

const Home = props => {
  const [list, setList] = useState('all');
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        `https://el-coffee-shop.herokuapp.com/products?limit=5`,
      );
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <Header {...props} />
      <View style={style.container}>
        <Text style={style.title}>A good coffee is a good day</Text>
      </View>
      <View style={style.searchContainer}>
        <IconIonicons name="search" size={20} color="#9F9F9F" />
        <TextInput style={style.searchInput} placeholder={'Search'} />
      </View>
      <ScrollView
        horizontal={true}
        style={style.scrollViewH}
        showsHorizontalScrollIndicator={false}>
        <Text
          style={
            list === 'favorite' ? style.categoryTextAct : style.categoryText
          }
          onPress={() => setList('favorite')}>
          Favorite
        </Text>
        <Text
          style={list === 'coffee' ? style.categoryTextAct : style.categoryText}
          onPress={() => setList('coffee')}>
          Coffee
        </Text>
        <Text
          style={
            list === 'noncoffee' ? style.categoryTextAct : style.categoryText
          }
          onPress={() => setList('noncoffee')}>
          Non Coffee
        </Text>
        <Text
          style={list === 'food' ? style.categoryTextAct : style.categoryText}
          onPress={() => setList('food')}>
          Food
        </Text>
        <Text
          style={list === 'all' ? style.categoryTextAct : style.categoryText}
          onPress={() => setList('all')}>
          All
        </Text>
        {/* </View> */}
      </ScrollView>
      <ScrollView
        horizontal={true}
        style={style.productContainer}
        showsHorizontalScrollIndicator={false}>
        {product.length > 0 &&
          product.map(result => (
            <CardProduct
              id={result.id}
              key={result.id}
              name={result.name}
              pict={
                result.pict
                  ? result.pict
                  : require('../../assets/vector/products-default.png')
              }
              price={result.price}
              {...props}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Home;
