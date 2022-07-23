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
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },

  imageCart: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginRight: 10,
  },

  titleCart: {
    fontWeight: 'bold',
    color: 'black',
  },

  sizeCart: {
    color: 'black',
    paddingVertical: 3,
  },

  addInfo: {
    width: 195,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  qtyCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A4029',
    width: 80,
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 4,
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
