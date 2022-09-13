import { configureStore } from '@reduxjs/toolkit';
import masterReducer from '@app/store/slices/master.reducer';

/**
 * create the app store
 * with the configurations
 */
export const store = configureStore({
  reducer: masterReducer,
  devTools: true,
});
