import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    // borderRadius: 10,
    overflow: 'hidden',
    // display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-between',
  },

  profileContainer: {
    backgroundColor: '#6A4029',
    paddingVertical: '5%',
    display: 'flex',
    borderBottomRightRadius: 40,
  },

  profpict: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },

  username: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  email: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },

  menuList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: 23,
  },

  menuText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#6A4029',
  },

  // Modal Styling
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 5,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 30,
  },

  modalBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },

  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#6A4029',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
  },

  buttonLogout: {
    borderRadius: 20,
    width: '35%',
    padding: 15,
    elevation: 2,
    margin: 5,
    backgroundColor: '#6A4029',
  },

  buttonCancel: {
    borderRadius: 20,
    width: '35%',
    padding: 15,
    elevation: 2,
    margin: 5,
    backgroundColor: '#FFBA33',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
