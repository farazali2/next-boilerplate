import { configureStore } from '@reduxjs/toolkit';
import slices from '@app/store/slices';

/**
 * create the app store
 * with the configurations
 */
export const store = configureStore({
  reducer: slices,
  devTools: true,
});
