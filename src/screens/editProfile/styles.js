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
    borderRadius: 50,
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
});
