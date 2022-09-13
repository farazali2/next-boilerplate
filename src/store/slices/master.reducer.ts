import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import reducers from './index';

const combineReducer = combineReducers(reducers);

/**
 * Master reducer to handle app
 * hydrate state for client and
 * server
 */
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

export default masterReducer;
