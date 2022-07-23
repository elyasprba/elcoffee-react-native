import {REACT_APP_BE_HOST} from '@env';
import axios from 'axios';

export const getUsersAxios = token => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return axios.get(`${REACT_APP_BE_HOST}/users/profile-detail`, config);
};
