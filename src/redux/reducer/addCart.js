import {ADD_TO_CART} from '../actionCreator/actionString';

const initialState = {
  addProduct: {},
};

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, addProduct: action.payload};
    default:
      return state;
  }
};
