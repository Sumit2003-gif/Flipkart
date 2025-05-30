// src/Flipkart Redux/CreateSearch.js

import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    term: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const { setSearchTerm } = SearchSlice.actions;
export default SearchSlice.reducer;
