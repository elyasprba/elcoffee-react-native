import axios from 'axios';
import {REACT_APP_BE_HOST} from '@env';

export const registerAxios = body => {
  const URL = `${REACT_APP_BE_HOST}/auth/register`;
  return axios.post(URL, body);
};

export const loginAxios = body => {
  const URL = `${REACT_APP_BE_HOST}/auth`;
  return axios.post(URL, body);
};
