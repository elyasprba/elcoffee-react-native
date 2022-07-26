import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  overLay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 10,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  topText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },

  textWellcome: {
    fontSize: 50,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  text: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  textInput: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    width: 280,
  },

  btn: {
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
});
