import {REACT_APP_BE_HOST} from '@env';

export const getProductsAxios = () => {
  const URL = `${REACT_APP_BE_HOST}/products?limit=5`;
  return axios.get(URL);
};

export const productDetailAxios = id => {
  const URL = `${REACT_APP_BE_HOST}/products/${id}`;
  return axios.get(URL);
};
