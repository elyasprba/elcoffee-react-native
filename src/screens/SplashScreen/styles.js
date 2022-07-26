import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    display: 'flex',
    flex: 1,
  },

  text: {
    color: 'white',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  mainContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
