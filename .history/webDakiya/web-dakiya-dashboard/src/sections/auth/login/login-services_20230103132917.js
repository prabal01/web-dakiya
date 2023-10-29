import axios from 'axios';
import { noAuthRequest } from '../../../utils/api';

export const loginUserReq = (email, password) => {
  const data = { email, password };
  const loginObj = {};
  return noAuthRequest().post('/login', data);
};
