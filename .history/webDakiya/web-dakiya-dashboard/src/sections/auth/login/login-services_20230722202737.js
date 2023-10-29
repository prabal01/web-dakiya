import axios from 'axios';
import { noAuthRequest } from '../../../utils/api';

export const loginUserReq = (email, password) => {
  const data = { email, password };
  return noAuthRequest().post('/login', data);
};
