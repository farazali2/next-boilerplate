import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface AppState {
  dark: boolean;
}

const initialState: AppState = {
  dark: false,
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDark: (state, action) => {
      state.dark = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setDark } = AppSlice.actions;

export default AppSlice.reducer;
