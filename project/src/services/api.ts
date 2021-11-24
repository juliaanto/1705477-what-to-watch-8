import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {getToken} from './token';
import { noAuthAction } from '../store/api-actions';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

type UnauthorizedCallback = () => void;

const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};

const api = createAPI(
  () => noAuthAction(),
);

export default api;
