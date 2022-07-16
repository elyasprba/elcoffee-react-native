import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    display: 'flex',
    flex: 1,
    // opacity: 0.9,
  },

  imageWelcome: {
    display: 'flex',
    flex: 1,
  },

  mainTitle: {
    backgroundColor: '#000000c0',
    width: 370,
    height: 120,
    justifyContent: 'center',
    opacity: 1,
  },

  text: {
    color: 'white',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textDesc: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    lineheight: '26px',
  },

  mainContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnStarted: {
    backgroundColor: '#FFBA33',
    height: 50,
    width: 250,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },

  btnNewAccount: {
    backgroundColor: '#6A4029',
    height: 50,
    width: 250,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },

  getStarted: {
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
  },

  createNewAccount: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
