import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface AppState {
  dark: boolean;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

const initialState: AppState = {
  dark: false,
  metadata: {
    title: '',
    description: '',
    keywords: '',
  },
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDark: (state, action) => {
      state.dark = action.payload;
    },
    setMetadata: (state, action) => {
      state.metadata = {
        title: action.payload.title || state.metadata.title,
        description: action.payload.title || state.metadata.title,
        keywords: action.payload.title || state.metadata.title,
      };
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

export const { setDark, setMetadata } = AppSlice.actions;

export default AppSlice.reducer;
