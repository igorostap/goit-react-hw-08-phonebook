import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
