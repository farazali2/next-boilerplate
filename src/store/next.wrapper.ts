import { createWrapper } from 'next-redux-wrapper';
import { store } from '@app/store/store';
import { AppStore } from '@app/store/types';

/**
 * Method to be passed to the next redux wrapper
 * @returns AppStore
 */
const makeStore = (): AppStore => store;

/**
 * Creating redux wrapper for the next JS
 */
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
