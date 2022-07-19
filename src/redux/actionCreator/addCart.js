import {ADD_TO_CART} from './actionString';

export const addToCartAction = addProduct => {
  return {
    type: ADD_TO_CART,
    payload: addProduct,
  };
};
