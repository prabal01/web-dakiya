import axios from 'axios';

const NOAUTH_API_URL = '';

export const noAuthRequest = (options) => {
  const noAuthReq = axios.create({
    baseURL: NOAUTH_API_URL,
  });
  return noAuthReq;
};
