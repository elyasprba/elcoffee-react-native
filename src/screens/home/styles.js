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
    fontWeight: 'bold',
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

  listProducts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  allProducrs: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
