import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSuggestion = createAsyncThunk('suggestion/fetchSuggestion', async () => {
  const response = await fetch('http://localhost:3004/api/suggestion');
  if (!response.ok) {
    throw new Error('Failed to fetch suggestion');
  }
  const data = await response.json();
  return data.suggestion;
});

const initialState = {
  suggestion: '',
  loading: false,
  error: true,
};

const options = {
  name: 'suggestion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        // Task 16: Handle all three promise lifecycle states - pending, fulfilled, and rejected - for the `fetchSuggestion()` call
        .addCase(fetchSuggestion.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSuggestion.fulfilled, (state, action) => {
          state.loading = false;
          state.suggestion = action.payload;
        })
        .addCase(fetchSuggestion.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
  },
};

const suggestionSlice = createSlice(options);

export default suggestionSlice.reducer;

// Task 17: Create a selector, called `selectSuggestion`, for the `suggestion` state variable and export it from the file
export const selectSuggestion = (state) => state.suggestion.suggestion;
export const selectLoading = (state) => state.suggestion.loading;
export const selectError = (state) => state.suggestion.error;
