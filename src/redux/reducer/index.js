import {combineReducers} from 'redux';
import loginReducer from './auth';

const reducer = combineReducers({
  auth: loginReducer,
});

export default reducer;
