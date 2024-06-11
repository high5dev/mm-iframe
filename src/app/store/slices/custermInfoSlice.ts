// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  age: string;
  gender: string;
  pregnancy: string;
  skinType: string;
  skinSensitivity: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  age: '',
  gender: '',
  pregnancy: '',
  skinType: '',
  skinSensitivity: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.pregnancy = action.payload.pregnancy;
      state.skinType = action.payload.skinType;
      state.skinSensitivity = action.payload.skinSensitivity;
    },
    clearUser(state) {
      state.name = '';
      state.email = '';
      state.age = '';
      state.gender = '';
      state.pregnancy = '';
      state.skinType = '';
      state.skinSensitivity = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
