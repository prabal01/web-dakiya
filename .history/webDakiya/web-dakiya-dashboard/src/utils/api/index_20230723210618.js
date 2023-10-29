import axios from 'axios';
import {getAuthHeaders} from './getHeaders'

const API_URL = '/api';


class AxiosAPI {
  constructor({baseURL, headers}, {responseInterceptors}) {
    const baseOptions = {
      baseURL,
      headers,
    };
    this.request = axios.create(baseOptions);
    this.request.interceptors.response.use(
      responseInterceptors.success,
      responseInterceptors.failure,
    );
  }

  make(options) {
    options = {
      ...options,
      method: options.method.toLowerCase(),
    };
    return this.request(options);
  }

  // eslint-disable-next-line class-methods-use-this
  parallelCalls() {
    return axios.all;
  }
}

export default AxiosAPI;


export const noAuthRequest = (options) => {
  const noAuthReq = axios.create({
    baseURL: API_URL,
  });
  return noAuthReq;
};

export const authRequest = (options) => {
  const headers = {
    ...getAuthHeaders(),
  };

  const authenticatedRequest = new AxiosAPI(
    {
      baseURL: configFile.API_URL,
      headers,
    },
    {
      responseInterceptors,
    },
  );
  return authenticatedRequest.make(options);
};