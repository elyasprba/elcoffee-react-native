import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import axios from 'axios';
import {REACT_APP_BE_HOST} from '@env';
import Toast from 'react-native-toast-message';

const CreateProduct = props => {
  const {authInfo} = useSelector(state => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [file, setFile] = useState(null);
  // name, description, size, delivery_info, category, price, stock
  const [body, setBody] = useState({
    photo: null,
    name: '',
    price: '',
    description: '',
    size: '',
    stock: 0,
    category: '',
  });

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: msg ? msg : 'Created Products Succsess',
    });
  };

  const errorToast = msg => {
    Toast.show({
      type: 'error',
      text1: msg,
    });
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

  const createProductsHandler = async () => {
    try {
      setIsLoading(true);
      if (file.size > 3e6) {
        return setTimeout(() => {
          setIsLoading(false);
          errorToast('Upload a smaller image');
        }, 2000);
      }
      const {name, description, size, delivery_info, category, price, stock} =
        body;
      let newBody = new FormData();
      newBody.append('photo', file);
      newBody.append('name', name);
      newBody.append('price', price);
      newBody.append('delivery_info', delivery_info);
      newBody.append('description', description);
      newBody.append('size', size);
      newBody.append('category', category);
      newBody.append('stock', stock);

      const config = {
        headers: {
          Authorization: `Bearer ${authInfo.token}`,
          'content-type': 'multipart/form-data',
        },
      };

      const result = await axios.post(
        `${REACT_APP_BE_HOST}/products`,
        newBody,
        config,
      );
      setMsg(result.data.msg);
      setIsLoading(false);
      successToast();
      props.navigation.navigate('listProduct');
      setBody({
        name: '',
        description: '',
        size: '',
        delivery_info: '',
        category: '',
        price: '',
        stock: '',
      });
    } catch (error) {
      setIsLoading(false);
      errorToast('Created Products Failed');
      console.log(error);
    }
  };

  // name, description, size, delivery_info, category, price, stock
  // console.log(body.name);
  // console.log(body.description);
  // console.log(body.size);
  // console.log(body.delivery_info);
  // console.log(body.category);
  // console.log(body.price);
  // console.log(body.stock);
  // console.log(file);

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
                    : body.photo
                    ? {uri: body.photo}
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
              value={body.name}
              onChangeText={name => setBody({...body, name})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Price</Text>
            <TextInput
              placeholder="Input the product price"
              placeholderTextColor="#9F9F9F"
              value={body.price}
              onChangeText={price => setBody({...body, price})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Delivery info</Text>
            <TextInput
              placeholder="Type delivery information"
              placeholderTextColor="#9F9F9F"
              value={body.delivery_info}
              onChangeText={delivery_info => setBody({...body, delivery_info})}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelStyle}>Description</Text>
            <TextInput
              placeholder="Describe your product"
              placeholderTextColor="#9F9F9F"
              value={body.description}
              onChangeText={description => setBody({...body, description})}
            />
          </View>
          <View style={styles.buttonBox}>
            <Text style={styles.labelStyle}>Select Size</Text>
            <View style={styles.btnWrapperCategory}>
              <Button
                onPress={() => setBody({...body, size: 'R'})}
                buttonStyle={
                  body.size === 'R' ? styles.btnCategory : styles.btnActive
                }>
                R
              </Button>
              <Button
                onPress={() => setBody({...body, size: 'L'})}
                buttonStyle={
                  body.size === 'L' ? styles.btnCategory : styles.btnActive
                }>
                L
              </Button>
              <Button
                onPress={() => setBody({...body, size: 'XL'})}
                buttonStyle={
                  body.size === 'XL' ? styles.btnCategory : styles.btnActive
                }>
                XL
              </Button>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <Text style={styles.labelStyle}>Select Category</Text>
            <View style={styles.btnWrapperCategory}>
              <Button
                onPress={() => setBody({...body, category: 1})}
                buttonStyle={
                  body.category === 1 ? styles.btnCategory : styles.btnActive
                }>
                FOOD
              </Button>
              <Button
                onPress={() => setBody({...body, category: 2})}
                buttonStyle={
                  body.category === 2 ? styles.btnCategory : styles.btnActive
                }>
                COFFEE
              </Button>
              <Button
                onPress={() => setBody({...body, category: 3})}
                buttonStyle={
                  body.category === 3 ? styles.btnCategory : styles.btnActive
                }>
                NON COFFEE
              </Button>
            </View>
          </View>
          <Button
            onPress={createProductsHandler}
            loading={isLoading}
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
              <View>
                <Pressable
                  style={styles.buttonCancelBtn}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Cancle</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default CreateProduct;
