import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },

  containerHistory: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },

  orderHistory: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15,
  },

  imageHistory: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginRight: 10,
  },

  titleHistory: {
    fontWeight: 'bold',
    color: 'black',
  },

  addInfo: {
    width: 195,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomHistory: {
    textAlign: 'center',
  },
});
