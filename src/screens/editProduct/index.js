import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {REACT_APP_BE_HOST} from '@env';
import {Button} from '@rneui/base';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

const EditProduct = props => {
  const {authInfo} = useSelector(state => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [file, setFile] = useState(null);

  const successToast = msg => {
    Toast.show({
      type: 'success',
      text1: msg,
    });
  };

  const errorToast = msg => {
    Toast.show({
      type: 'error',
      text1: msg,
    });
  };

  const productDetail = async () => {
    try {
      const id = props.route.params.id;
      const result = await axios.get(`${REACT_APP_BE_HOST}/products/${id}`);
      //   console.log(result.data.data[0]);
      setProduct(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const chooseImageGaleri = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    try {
      const result = await launchImageLibrary(options);
      setFile({
        name: result.assets[0].fileName,
        size: result.assets[0].fileSize,
        type: result.assets[0].type,
        uri: result.assets[0].uri,
        height: result.assets[0].height,
        width: result.assets[0].width,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const chooseImageCamera = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    try {
      const result = await launchCamera(options);
      setFile({
        name: result.assets[0].fileName,
        size: result.assets[0].fileSize,
        type: result.assets[0].type,
        uri: result.assets[0].uri,
        height: result.assets[0].height,
        width: result.assets[0].width,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductHandler = async () => {
    try {
      const {name, description, size, delivery_info, category, price} = product;
      let body = new FormData();
      body.append('photo', file);
      body.append('name', name);
      body.append('price', price);
      body.append('delivery_info', delivery_info);
      body.append('description', description);
      body.append('size', size);
      body.append('category', category);

      const config = {
        headers: {
          Authorization: `Bearer ${authInfo.token}`,
          'content-type': 'multipart/form-data',
        },
      };

      const result = await axios.patch(
        `${REACT_APP_BE_HOST}/products/${product.id}`,
        body,
        config,
      );

      console.log(result.data.data);

      successToast('Update product successfull');
      props.navigation.navigate('productDetail', {id: product.id});
      setProduct({});
      setFile(null);
    } catch (error) {
      errorToast('Update invalid, Please check input');
      console.log(error.response);
    }
  };

  useEffect(() => {
    productDetail();
  }, [props.route.params.id]);

  return (
    <>
      <ScrollView>
        <View style={styles.containerNew}>
          <View style={styles.Photo}>
            <View style={styles.photoWrapper}>
              <Image
                source={
                  file && file.uri
                    ? {uri: file.uri}
                    : product.pict
                    ? {uri: product.pict}
                    : require('../../assets/vector/products-default.png')
                }
                style={styles.imageProduct}
              />
              <Pressable
                style={styles.btnEdit}
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Icon name="pencil" size={20} color="white" />
              </Pressable>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Name</Text>
            <TextInput
              placeholder="Input the product name"
              placeholderTextColor="#9F9F9F"
              value={product.name}
              onChange={e => setProduct({...product, name: e.nativeEvent.text})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Price</Text>
            <TextInput
              placeholder="Input the product price"
              placeholderTextColor="#9F9F9F"
              value={product.price}
              onChangeText={price => setProduct({...product, price})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Delivery info</Text>
            <TextInput
              placeholder="Type delivery information"
              placeholderTextColor="#9F9F9F"
              value={product.delivery_info}
              onChangeText={delivery_info =>
                setProduct({...product, delivery_info})
              }
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Description</Text>
            <TextInput
              placeholder="Describe your product"
              placeholderTextColor="#9F9F9F"
              value={product.description}
              onChangeText={description =>
                setProduct({...product, description})
              }
            />
          </View>
          <View style={styles.buttonBox}>
            <Text style={styles.labelStyle}>Select Size</Text>
            <View style={styles.btnWrapperCategory}>
              <Button
                value={product.size}
                onPress={() => setProduct({...product, size: 'R'})}
                buttonStyle={
                  product.size === 'R' ? styles.btnCategory : styles.btnActive
                }>
                R
              </Button>
              <Button
                value={product.size}
                onPress={() => setProduct({...product, size: 'L'})}
                buttonStyle={
                  product.size === 'L' ? styles.btnCategory : styles.btnActive
                }>
                L
              </Button>
              <Button
                value={product.size}
                onPress={() => setProduct({...product, size: 'XL'})}
                buttonStyle={
                  product.size === 'XL' ? styles.btnCategory : styles.btnActive
                }>
                XL
              </Button>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <Text style={styles.labelStyle}>Select Category</Text>
            <View style={styles.btnWrapperCategory}>
              <Button
                value={product.category}
                onPress={() => setProduct({...product, category: '1'})}
                buttonStyle={
                  product.category === '1'
                    ? styles.btnCategory
                    : styles.btnActive
                }>
                FOOD
              </Button>
              <Button
                value={product.category}
                onPress={() => setProduct({...product, category: '2'})}
                buttonStyle={
                  product.category === '2'
                    ? styles.btnCategory
                    : styles.btnActive
                }>
                COFFEE
              </Button>
              <Button
                value={product.category}
                onPress={() => setProduct({...product, category: '3'})}
                buttonStyle={
                  product.category === '3'
                    ? styles.btnCategory
                    : styles.btnActive
                }>
                NON COFFEE
              </Button>
            </View>
          </View>
          <Button
            onPress={updateProductHandler}
            // loading={isLoading}
            buttonStyle={styles.btnSave}
            color="#6A4029">
            Save Product
          </Button>
        </View>
      </ScrollView>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalTitle}>
                <Text style={styles.textTitle}>
                  Are you sure you want to leave?
                </Text>
              </View>
              <View style={styles.modalBtn}>
                <Pressable
                  style={styles.buttonLogout}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    chooseImageCamera();
                  }}>
                  <Text style={styles.textStyle}>Camera</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonCancel}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    chooseImageGaleri();
                  }}>
                  <Text style={styles.textStyle}>Galeri</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default EditProduct;
