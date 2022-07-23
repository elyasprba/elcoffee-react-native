import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {REACT_APP_BE_HOST} from '@env';

const History = () => {
  // const {isSuccess, isLoading, errMsg} = useSelector(state => state.auth);
  const {authInfo} = useSelector(state => state.auth);
  const [history, setHistory] = useState([]);

  const historyHandler = async () => {
    try {
      const config = {headers: {Authorization: `Bearer ${authInfo.token}`}};
      const result = await axios.get(
        `${REACT_APP_BE_HOST}/transactions`,
        config,
      );

      setHistory(result.data.data);
      console.log('GET HISTORY =', result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (isSuccess) {
    historyHandler();
    // }
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.orderHistory}>Order History</Text>
          </View>
          <FlatList
            data={history}
            renderItem={({item, idx}) => (
              <View style={styles.containerHistory} key={idx}>
                <Image
                  source={
                    item.pict
                      ? {uri: item.pict}
                      : require('../../assets/vector/products-default.png')
                  }
                  style={styles.imageHistory}
                />
                <View>
                  <View>
                    <Text style={styles.titleHistory}>{item.name}</Text>
                  </View>
                  <View style={styles.addInfo}>
                    <Text>IDR {item.total}</Text>
                  </View>
                </View>
              </View>
            )}
          />
          {/* {history.map((result, idx) => (
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
          ))} */}
          <View>
            <Text style={styles.bottomHistory}>You have no history left</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default History;
