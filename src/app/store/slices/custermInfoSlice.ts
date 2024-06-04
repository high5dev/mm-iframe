// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  id: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  id: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    clearUser(state) {
      state.name = '';
      state.email = '';
      state.id = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
