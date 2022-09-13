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

/**
 * Exporting get intial app props with redux store
 */
export const getAppInitialAppProps = wrapper.getInitialAppProps;

/**
 * Exporting get intial page props with redux store
 */
export const getAppInitialPageProps = wrapper.getInitialPageProps;

/**
 * Exporting get server side props with redux store
 */
export const getAppServerSideProps = wrapper.getServerSideProps;

/**
 * Exporting get static props with redux store
 */
export const getAppStaticProps = wrapper.getStaticProps;
