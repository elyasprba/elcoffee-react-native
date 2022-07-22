import {combineReducers} from 'redux';
import loginReducer from './auth';
import {addToCartReducer} from './addCart';
import userReducer from './user';

const reducer = combineReducers({
  auth: loginReducer,
  user: userReducer,
  cart: addToCartReducer,
});

export default reducer;
