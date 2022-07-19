import axios from 'axios';

const BASE_URL = 'https://el-coffee-shop.herokuapp.com';

export const getProductsAxios = () => {
  const URL = `${BASE_URL}/products?limit=5`;
  return axios.get(URL);
};

export const productDetailAxios = id => {
  const URL = `${BASE_URL}/products/${id}`;
  return axios.get(URL);
};
