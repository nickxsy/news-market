import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { postReducer } from '@/entities/post';

export const store = configureStore({
  reducer: {
    posts: postReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): typeof store.dispatch => {
  return useDispatch();
};
export const useAppSelector = useSelector;
