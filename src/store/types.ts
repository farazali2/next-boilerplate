import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from '@app/store';

/**
 * Creating app store type
 */
export type AppStore = typeof store;

/**
 * Createing app state type
 */
export type AppState = ReturnType<AppStore['getState']>;

/**
 * Creating app dispatch type
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Creating app thunk type
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
