import {LOGIN} from './actionString';

import {loginAxios} from '../../modules/auth';

export default loginAction = body => {
  return {
    type: LOGIN,
    payload: loginAxios(body),
  };
};
