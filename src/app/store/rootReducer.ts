// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import userReducer from './slices/custermInfoSlice';
import dataSetSlice from './slices/dataSetSlice'

const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
  dataset: dataSetSlice
});

export default rootReducer;
