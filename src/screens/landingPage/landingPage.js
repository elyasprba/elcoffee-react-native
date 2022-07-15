import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    display: 'flex',
    flex: 1,
    opacity: 0.9,
  },

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
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
  },

  getStarted: {
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  },
});
