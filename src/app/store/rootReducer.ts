// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import userReducer from './slices/custermInfoSlice';

const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
});

export default rootReducer;
