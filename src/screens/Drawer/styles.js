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
    // borderBottomRightRadius: 20,
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
    paddingVertical: 20,
  },

  menuText: {
    marginLeft: 15,
    fontSize: 17,
    color: '#6A4029',
  },

  // Modal Styling
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
