import { configureStore } from '@reduxjs/toolkit';

//Importing slices
import AppReducer, { AppSlice } from './slices/app.slice';
import UniversitiesReducer, { UniversitiesSlice } from './slices/universities.slice';

/**
 * create the app store
 * with the configurations
 */
export const store = configureStore({
  reducer: {
    [AppSlice.name]: AppReducer,
    [UniversitiesSlice.name]: UniversitiesReducer
  },
  devTools: true,
});
