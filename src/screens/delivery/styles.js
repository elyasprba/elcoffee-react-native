import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  paymnetContainer: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    paddingTop: 0,
    flex: 1,
  },

  titlePage: {
    fontWeight: 'bold',
    fontSize: 40,
    marginVertical: 20,
    color: 'black',
  },

  titleAddress: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },

  addressCard: {
    paddingHorizontal: 20,
    paddingVertical: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 20,
  },

  textAddress: {
    color: 'black',
    paddingBottom: 8,
    paddingTop: 8,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },

  deliveryCard: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    justifyContent: 'space-between',
  },

  textDelivery: {
    color: 'black',
  },

  wrapBtnSize: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  btnSize: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },

  btnActive: {
    backgroundColor: '#6A4029',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },

  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  btnCheckout: {
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
    fontWeight: '900',
  },
});
