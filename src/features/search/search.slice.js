import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const options = {
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
};

const searchSlice = createSlice(options);

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchTerm = (state) => state.search.searchTerm;
