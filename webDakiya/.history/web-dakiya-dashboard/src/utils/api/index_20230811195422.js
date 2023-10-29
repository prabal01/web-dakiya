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
    const optionsClean = {
      ...options,
      method: options.method.toLowerCase(),
    };
    return this.request(optionsClean);
  }

  // eslint-disable-next-line class-methods-use-this
  parallelCalls() {
    return axios.all;
  }
}

export default AxiosAPI;


export const noAuthRequest = () => {
  const noAuthReq = axios.create({
    baseURL: API_URL,
  });
  return noAuthReq;
};

export const authRequest = (options) => {
  const headers = {
    ...getAuthHeaders(),
  };


const responseInterceptors = {
  success(res) {
    return res;
  },
  failure(err) {
    let errorObj = err.response;
    if (typeof errorObj !== 'undefined' && err.response.status === 401) {
      // clearStorage();
      // changeLocation('/dashboard/login');
      if (errorObj.data.message === 'Unauthorized request') {
        errorObj.data.message = '';
        console.log("🚀 ~ file: index.js:62 ~ failure ~ window.location.href:", window.location.href)
        window.location.href='/login';
        return Promise.reject(errorObj);
      }
    }

    if (typeof errorObj === 'undefined') {
      errorObj = {
        status: 0,
        data: {
          message: err.message,
        },
      };
    }
    if (
      errorObj.headers &&
      errorObj.headers['content-type'] === 'application/xml' &&
      errorObj.data.match(/<Message>/)
    ) {
      errorObj = {
        status: errorObj.status,
        data: {
          message: errorObj.data.match(/Message>([^<]+)/)[1],
        },
      };
    } else if (!errorObj.data || !errorObj.data.message) {
      errorObj = {
        status: errorObj.status,
        data: {
          message: `${errorObj.status} ${errorObj.statusText}`,
        },
      };
    }

    return Promise.reject(errorObj);
  },
};

  const authenticatedRequest = new AxiosAPI(
    {
      baseURL: API_URL,
      headers,
    },
    {
      responseInterceptors,
    },
  );
  return authenticatedRequest.make(options);
};