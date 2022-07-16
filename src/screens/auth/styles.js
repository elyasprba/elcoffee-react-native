import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  imageRegister: {
    display: 'flex',
    flex: 1,
  },

  text: {
    color: 'white',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 90,
  },

  mainContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },

  btnCreateAccount: {
    backgroundColor: '#6A4029',
    height: 50,
    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  btnCreateAccountGoogle: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },

  createAccount: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },

  createAccountGoogle: {
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
  },

  boxInput: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    width: '80%',
  },

  inputField: {
    color: 'white',
    fontWeight: 'bold',
  },

  // imageGoogle: {
  //   width: 10,
  //   height: 10,
  // },
});
