import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    resizeMode: 'cover',
  },

  subtitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 20,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: '#000000',
  },

  subtitleSecond: {
    fontSize: 15,
    marginHorizontal: 15,
    color: '#000000',
  },

  card: {
    // width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  item: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000000',
  },

  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: '#000000',
  },

  methodCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  border: {
    borderWidth: 1,
    borderColor: '#000000',
    opacity: 0.1,
    marginVertical: 5,
  },

  delivery: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#000000',
    marginVertical: 5,
  },

  paymentBtn: {
    backgroundColor: '#6A4029',
    width: '90%',
    height: 50,
    borderRadius: 15,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paymentTxt: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },

  totalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  cardBank: {
    width: 315,
    height: 180,
    borderRadius: 15,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
