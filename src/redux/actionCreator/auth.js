import {LOGIN, LOGOUT} from './actionString';
import {loginAxios} from '../../modules/auth';

export const loginAction = body => {
  return {
    type: LOGIN,
    payload: loginAxios(body),
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
