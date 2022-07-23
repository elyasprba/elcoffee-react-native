import {ADD_TO_CART, REMOVE_CART} from './actionString';

export const addToCartAction = addProduct => {
  return {
    type: ADD_TO_CART,
    payload: addProduct,
  };
};

export const removeCartAction = () => {
  return {
    type: REMOVE_CART,
  };
};
