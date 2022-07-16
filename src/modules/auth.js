import axios from 'axios';

const BASE_URL = 'https://el-coffee-shop.herokuapp.com';

export const registerAxios = body => {
  const URL = `${BASE_URL}/auth/register`;
  return axios.post(URL, body);
};

export const loginAxios = body => {
  const URL = `${BASE_URL}/auth`;
  return axios.post(URL, body);
};
