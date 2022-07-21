import {View, Text, TextInput, ScrollView, Pressable} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import style from './styles';
import CardProduct from '../../components/Products';

const ListProduct = props => {
  const [list, setList] = useState('favorite');
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      let baseUrl = `https://el-coffee-shop.herokuapp.com/products`;
      if (list === 'favorite') {
        baseUrl += `/favorite`;
      }
      if (list !== 'favorite' && list !== 'all') {
        baseUrl += `?category_name=${list}&limit=7&page=1`;
      }
      baseUrl;
      const result = await axios.get(baseUrl);
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [list]);

  return (
    <View>
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
            list === 'non coffee' ? style.categoryTextAct : style.categoryText
          }
          onPress={() => setList('non coffee')}>
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
      <View style={style.listProducts}>
        <Text style={style.allProducrs}>SORT</Text>
        <Pressable onPress={() => props.navigation.navigate('listProduct')}>
          <Text style={style.allProducrs}>ORDER</Text>
        </Pressable>
      </View>
      <ScrollView
        // horizontal={true}
        style={style.productContainer}
        showsHorizontalScrollIndicator={false}>
        {product.length > 0 &&
          product.map((result, idx) => (
            <CardProduct
              key={idx}
              id={result.id ? result.id : result.products_id}
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

export default ListProduct;
