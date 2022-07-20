import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

const History = () => {
  const {authInfo} = useSelector(state => state.auth);
  const [history, setHistory] = useState([]);

  const historyHandler = async () => {
    try {
      const config = {headers: {Authorization: `Bearer ${authInfo.token}`}};
      const result = await axios.get(
        `https://el-coffee-shop.herokuapp.com/transactions`,
        config,
      );
      console.log('GET HISTORY =', result.data.data[0]);
      setHistory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    historyHandler();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.orderHistory}>Order History</Text>
          </View>
          {history.map((result, idx) => (
            <View style={styles.containerHistory} key={idx}>
              <Image
                source={
                  result.pict
                    ? {uri: result.pict}
                    : require('../../assets/vector/products-default.png')
                }
                style={styles.imageHistory}
              />
              <View>
                <View>
                  <Text style={styles.titleHistory}>{result.name}</Text>
                </View>
                <View style={styles.addInfo}>
                  <Text>IDR {result.total}</Text>
                </View>
              </View>
            </View>
          ))}
          <View>
            <Text style={styles.bottomHistory}>You have no history left</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default History;