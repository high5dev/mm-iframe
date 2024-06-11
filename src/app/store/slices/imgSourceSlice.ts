import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface imgSetState {
    image_src: string;
}

const initialState: imgSetState = {
  image_src: '',
};

const imgSrcSlice = createSlice({
    name: 'imgSrc',
    initialState,
    reducers: {
      setImgSource(state, action: PayloadAction<imgSetState>) {
        state.image_src = action.payload.image_src;
      },
      clearImgSrc(state) {
        state.image_src = '';
      },
    },
  });
  
  export const { setImgSource, clearImgSrc } = imgSrcSlice.actions;
  export default imgSrcSlice.reducer;