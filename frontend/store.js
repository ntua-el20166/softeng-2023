import { configureStore } from '@reduxjs/toolkit';
import { singleTitleReducer } from './slices';

export const store = configureStore({
  reducer: { singleTitle: singleTitleReducer },
})