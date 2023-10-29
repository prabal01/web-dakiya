import axios from 'axios';

const API_URL = '/api';

export const noAuthRequest = (options) => {
  const noAuthReq = axios.create({
    baseURL: API_URL,
  });
  return noAuthReq;
};

export const authRequest = (options = {}) =>  {return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization:`bearer ${localStorage.getItem("authToken")}`
  },
    {...options}
  })}
