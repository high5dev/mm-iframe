// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/custermInfoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
