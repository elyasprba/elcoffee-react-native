import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerCart: {
    backgroundColor: '#ECECEC',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },

  containerCard: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    // display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
  },

  imageCart: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  titleCart: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
  },

  price: {
    fontSize: 17,
  },

  sizeCart: {
    color: 'black',
    paddingVertical: 3,
  },

  addInfo: {
    width: 195,
    marginTop: 5,
  },

  qtyCart: {
    // marginHorizontal: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A4029',
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4,
    height: 40,
    width: '100%',
  },

  btnQty: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
  },

  qty: {
    color: 'white',
  },

  cartBtn: {
    backgroundColor: '#FFBA33',
    width: '100%',
    alignSelf: 'center',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: '3%',
  },

  cartText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#6A4029',
  },

  cartBtnBack: {
    backgroundColor: '#6A4029',
    width: '100%',
    alignSelf: 'center',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: '3%',
  },

  cartTextBack: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  pleaseAddInfo: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
