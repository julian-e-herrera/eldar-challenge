import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Posteo } from '../../types/Posteo';

interface DataState {
  data: Posteo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
    },
    fetchDataSuccess(state, action: PayloadAction<Posteo[]>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createItem(state, action: PayloadAction<Posteo>) {
      state.data.push(action.payload);
    },
    updateItem(state, action: PayloadAction<Posteo>) {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  createItem,
  updateItem,
} = dataSlice.actions;

export default dataSlice.reducer;
