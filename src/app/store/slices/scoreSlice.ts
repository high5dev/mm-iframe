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
    uniformness: string
    primaryConcern: any
    secondaryConcern: any
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
    uniformness: '',
    primaryConcern: null,
    secondaryConcern: null
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
        state.uniformness = action.payload.uniformness;
        state.primaryConcern = action.payload.primaryConcern
        state.secondaryConcern = action.payload.secondaryConcern
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
        state.uniformness = '';
        state.primaryConcern = null;
        state.secondaryConcern = null;
      },
    },
  });
  
  export const { setScore, clearScore } = ScoreSlice.actions;
  export default ScoreSlice.reducer;