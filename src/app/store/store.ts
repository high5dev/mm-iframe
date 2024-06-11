// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/custermInfoSlice';
import imgSrcSlice from './slices/imgSourceSlice'
import scoreReducer from './slices/scoreSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    imgSrc: imgSrcSlice,
    score: scoreReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
