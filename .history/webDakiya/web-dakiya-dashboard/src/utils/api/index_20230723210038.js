import axios from 'axios';
import {getAuthHeaders} from './getHeaders'

const API_URL = '/api';

export const noAuthRequest = (options) => {
  const noAuthReq = axios.create({
    baseURL: API_URL,
  });
  return noAuthReq;
};

export const authRequest = (options = {}) =>  {return axios.create({
  ...options,
    baseURL: API_URL,
    headers: getAuthHeaders()
  })}
