/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { readToken } from '../utils';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer: ${readToken()}`;
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

export { httpClient };
