import {
  LOGIN,
  LOGOUT,
  PENDING,
  FULFILLED,
  REJECTED,
} from '../actionCreator/actionString';

const initialState = {
  userInfo: null,
  isLoading: false,
  err: null,
  isSuccess: null,
  isLoggedIn: false,
};

const loginReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOGIN + PENDING:
      return {...initialState, err: null, isLoading: true, isSuccess: null};

    case LOGIN + FULFILLED:
      return {
        ...prevState,
        isLoading: false,
        userInfo: action.payload.data,
        isSuccess: true,
        isLoggedIn: true,
      };

    case LOGIN + REJECTED:
      return {
        ...prevState,
        err: action.payload.response.data,
        isLoading: false,
        isSuccess: false,
      };

    case LOGOUT:
      return initialState;

    default:
      return prevState;
  }
};

export default loginReducer;
