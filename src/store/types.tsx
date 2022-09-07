import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './index';

export type AppStore = ReturnType<typeof store>;

export type AppState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
