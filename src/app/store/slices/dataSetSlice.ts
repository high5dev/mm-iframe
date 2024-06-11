import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataSetState {
    access_token: string;
    company_id?: string;
    name?: string;
    dataset_id?: string;
    subject_id?: string
    batch_id?: string
    image_id?: string
    success: number
}

const initialState: DataSetState = {
    access_token: '',
    company_id: '',
    name: '',
    dataset_id: '',
    subject_id: '',
    batch_id: '',
    image_id: '',
    success: 0
};

const dataSetSlice = createSlice({
    name: 'dataset',
    initialState,
    reducers: {
      setDataSet(state, action: PayloadAction<DataSetState>) {
        state.access_token = action.payload.access_token;
        state.name = action.payload.name;
        state.company_id = action.payload.company_id;
        state.dataset_id = action.payload.dataset_id;
        state.subject_id = action.payload.subject_id;
        state.batch_id = action.payload.batch_id;
        state.image_id = action.payload.image_id;
        state.success = action.payload.success;
      },
      clearDataSet(state) {
        state.access_token = '';
        state.name = '';
        state.company_id = '';
        state.dataset_id = '';
        state.subject_id = '';
        state.batch_id = '';
        state.image_id = '';
        state.success = 0;
      },
    },
  });
  
  export const { setDataSet, clearDataSet } = dataSetSlice.actions;
  export default dataSetSlice.reducer;