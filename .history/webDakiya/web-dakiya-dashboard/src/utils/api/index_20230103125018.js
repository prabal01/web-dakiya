import axios from 'axios';

const API_URL = '/api';

export const noAuthRequest = (options) => {
  const noAuthReq = axios.create({
    baseURL: API_URL,
  });
  return noAuthReq;
};
