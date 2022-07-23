import {ADD_TO_CART, REMOVE_CART} from '../actionCreator/actionString';

const initialState = {
  addProduct: {},
};

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, addProduct: action.payload};

    case REMOVE_CART:
      return {...initialState};

    default:
      return state;
  }
};
