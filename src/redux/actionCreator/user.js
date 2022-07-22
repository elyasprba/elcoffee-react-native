import {GET_USER} from './actionString';
import {getUsersAxios} from '../../modules/user';

export const userAction = token => {
  return {
    type: GET_USER,
    payload: getUsersAxios(token),
  };
};
