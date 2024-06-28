import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoreState {
    acne: string;
    age: string;
    eyeAge: string;
    eyeBags: string;
    hydration: string
    lines: string
    pigmentation: string
    pores: string
    redness: string
    skinTone: string
    translucency: string
    uniformness: string
}

const initialState: ScoreState = {
    acne: '',
    age: '',
    eyeAge: '',
    eyeBags: '',
    hydration: '',
    lines: '',
    pigmentation: '',
    pores: '',
    redness: '',
    skinTone: '',
    translucency: '',
    uniformness: ''
};

const ScoreSlice = createSlice({
    name: 'hautScore',
    initialState,
    reducers: {
      setScore(state, action: PayloadAction<ScoreState>) {
        state.acne = action.payload.acne;
        state.age = action.payload.age;
        state.eyeAge = action.payload.eyeAge;
        state.eyeBags = action.payload.eyeBags;
        state.hydration = action.payload.hydration;
        state.lines = action.payload.lines;
        state.pigmentation = action.payload.pigmentation;
        state.pores = action.payload.pores;
        state.redness = action.payload.redness;
        state.skinTone = action.payload.skinTone;
        state.translucency = action.payload.translucency;
        state.uniformness = action.payload.uniformness;
      },
      clearScore(state) {
        state.acne = '';
        state.age = '';
        state.eyeAge = '';
        state.eyeBags = '';
        state.hydration = '';
        state.lines = '';
        state.pigmentation = '';
        state.pores = '';
        state.redness = '';
        state.skinTone = '';
        state.translucency = '';
        state.uniformness = '';
      },
    },
  });
  
  export const { setScore, clearScore } = ScoreSlice.actions;
  export default ScoreSlice.reducer;