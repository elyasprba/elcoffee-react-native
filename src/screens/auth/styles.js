import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  imageBg: {
    flex: 1,
  },

  imageBgClr: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    opacity: 10,
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  // titleContainer: {
  //   flex: 1,
  // },

  title: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
  },

  titleRegister: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
  },

  btmContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    fontSize: 14,
    color: '#ffffff',
  },

  forgot: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 5,
  },

  loginBtn: {
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

  loginText: {
    color: '#6A4029',
    fontWeight: 'bold',
    fontSize: 17,
  },

  // info: {
  //   marginTop: 10,
  //   alignItems: 'center',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // infoText: {
  //   color: '#ffffff',
  //   fontSize: 14,
  //   marginHorizontal: 10,
  // },

  gbutton: {
    backgroundColor: '#ffffff',
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

  // google: {
  //   width: 20,
  //   height: 20,
  //   marginRight: 10,
  // },

  gbuttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
