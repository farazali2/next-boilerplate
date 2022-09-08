import { useSelector, useDispatch, TypedUseSelectorHook  } from 'react-redux';
import { AppState, AppDispatch } from '@app/store/types';

/**
 * Use dispatch hook for the application
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Use selector hook for the application
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

