// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/custermInfoSlice';
import dataSetState from './slices/dataSetSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    dataset: dataSetState
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
