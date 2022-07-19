import {combineReducers} from 'redux';
import loginReducer from './auth';
import {addToCartReducer} from './addCart';

const reducer = combineReducers({
  auth: loginReducer,
  cart: addToCartReducer,
});

export default reducer;
