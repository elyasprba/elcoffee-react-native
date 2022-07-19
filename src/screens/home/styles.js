import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },

  title: {
    paddingVertical: 20,
    fontWeight: 'bold',
    fontSize: 34,
    color: '#000000',
  },

  searchContainer: {
    marginBottom: 20,
    display: 'flex',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    marginHorizontal: '10%',
    borderRadius: 100,
    paddingHorizontal: 15,
  },

  searchInput: {
    paddingVertical: 5,
    fontSize: 16,
    width: '100%',
    textAlignVertical: 'auto',
  },

  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    width: 800,
  },

  scrollViewH: {
    marginHorizontal: '5%',
    marginVertical: 10,
  },

  categoryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#9A9A9D',
    marginRight: 20,
  },

  categoryTextAct: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#6A4029',
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#6A4029',
  },

  productContainer: {
    marginVertical: 10,
    marginHorizontal: '5%',
  },
});