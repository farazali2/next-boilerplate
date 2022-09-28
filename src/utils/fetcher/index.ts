import axios, { AxiosResponse } from 'axios';
import { setupInterceptorsTo } from './interseptors';
import config from '@app/config';
import { createApiUrl } from './url';

/**
 * Creating axios instance with the
 * app settings
 */
const fetcher = axios.create({
  baseURL: createApiUrl(config.fetcher.baseURL, config.fetcher.sufix),
  headers: config.fetcher.headers,
});

/**
 * Setting up interceptors to app
 * axios instance
 */
setupInterceptorsTo(axios);

/**
 * Exporting response type for the
 * axios response
 */
export type Response = AxiosResponse;

/**
 * Exporting ES6 default module
 */
export default fetcher;
