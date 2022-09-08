import { createWrapper, Context } from 'next-redux-wrapper';
import { store } from '@app/store/store';
import { AppStore } from '@app/store/types';
import config from '@app/config';

/**
 * Method to be passed to the next redux wrapper
 * @param context 
 * @returns AppStore
 */
const makeStore = (context: Context): AppStore => store;

/**
 * Creating redux wrapper for the next JS
 */
 export const wrapper = createWrapper<AppStore>(makeStore, {debug: config.app.environment !== 'production'});