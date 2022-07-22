import {
  FULFILLED,
  GET_USER,
  PENDING,
  REJECTED,
} from '../actionCreator/actionString';

const initialState = {
  userInfo: {},
  isLoading: false,
  isError: null,
  err: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_USER + PENDING:
      return {...prevState, isLoading: true, isError: null, err: null};

    case GET_USER + FULFILLED:
      return {
        ...prevState,
        userInfo: action.payload.data.data[0],
        isLoading: false,
        isError: false,
      };

    case GET_USER + REJECTED:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        err: action.payload.data,
      };

    default:
      return prevState;
  }
};

export default userReducer;
