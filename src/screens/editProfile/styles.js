import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F8',
  },
  containerEdit: {
    alignItems: 'center',
    flex: 1,
  },

  containerTextEdit: {
    padding: 30,
  },

  imageProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 10,
  },

  containerPhoto: {
    position: 'relative',
    padding: 10,
  },

  btnEdit: {
    backgroundColor: '#6A4029',
    width: '10%',
    paddingTop: 9,
    paddingBottom: 9,
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    top: 30,
    left: 135,
  },

  inputBox: {
    marginTop: 10,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
  },

  dateBox: {
    marginTop: 10,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  radioBox: {
    marginTop: 10,
    flexDirection: 'row',
  },

  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },

  labelGender: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },

  label: {
    fontWeight: '800',
    fontSize: 16,
  },

  containerDate: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnSave: {
    marginTop: 20,
    padding: 13,
    borderRadius: 15,
  },

  // Modal styling
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
