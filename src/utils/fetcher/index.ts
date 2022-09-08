import axios, { AxiosResponse } from 'axios';
import { setupInterceptorsTo } from './interseptors';

/**
 * Creating axios instance with the
 * app settings
 */
const fetcher = axios.create();

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
