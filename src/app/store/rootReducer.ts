// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import userReducer from './slices/custermInfoSlice';
import dataSetSlice from './slices/imgSourceSlice'
import scoreSlice from './slices/scoreSlice'
import productSlice from './slices/productSlice'

const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
  dataset: dataSetSlice,
  score: scoreSlice,
  product: productSlice
});

export default rootReducer;
