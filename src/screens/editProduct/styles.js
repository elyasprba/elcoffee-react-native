import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  containerNew: {
    flex: 1,
    backgroundColor: '#ECECEC',
    paddingTop: 20,
    paddingRight: 35,
    paddingLeft: 35,
    paddingBottom: 20,
  },

  Photo: {
    alignItems: 'center',
  },

  containerPhoto: {
    alignItems: 'center',
    backgroundColor: '#BABABA59',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 100,
  },

  photoWrapper: {
    position: 'relative',
  },

  imageProduct: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  btnEdit: {
    width: 40,
    height: 40,
    backgroundColor: '#6A4029',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    // top: 100,
    left: 105,
  },

  inputBox: {
    marginTop: 20,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 2,
  },

  btnSave: {
    // marginBottom: 30,
    marginTop: 30,
    padding: 13,
    borderRadius: 15,
    fontWeight: '900',
  },

  labelStyle: {
    color: 'black',
    fontWeight: '900',
    fontSize: 18,
  },

  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },

  modalBody: {
    width: 365,
    height: 280,
    backgroundColor: '#e9e9e9',
    padding: 20,
    borderRadius: 15,
    borderColor: '#6A4029',
    borderWidth: 2,
    marginTop: 350,
    alignItems: 'center',
  },

  titleModal: {
    fontSize: 30,
    color: 'black',
  },

  btnUpload1: {
    marginTop: 15,
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },

  containerBtnUpload: {
    width: '90%',
  },

  buttonBox: {
    marginTop: 20,
  },

  btnWrapperCategory: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnCategory: {
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },

  btnActive: {
    backgroundColor: '#FFBA33',
    borderRadius: 10,
  },

  //Modal styling
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
    backgroundColor: '#FFBA33',
  },

  buttonCancel: {
    borderRadius: 20,
    width: '35%',
    padding: 15,
    elevation: 2,
    margin: 5,
    backgroundColor: '#FFBA33',
  },

  buttonCancelBtn: {
    borderRadius: 10,
    width: '35%',
    padding: 7,
    elevation: 2,
    backgroundColor: '#6A4029',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
