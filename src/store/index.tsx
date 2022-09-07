import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { AppStore } from './types';
import AppReducer, { AppSlice } from './slices/app.slice';

export const store = () => {
  return configureStore({
    reducer: {
      [AppSlice.name]: AppReducer,
    },
    devTools: true,
  });
};

export const wrapper = createWrapper<AppStore>(store);
