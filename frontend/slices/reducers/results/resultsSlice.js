import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    resultsLoading: false,
    results: [],
  },
  reducers: {
    fetchResults: (state, { payload }) => {
      state.resultsLoading = true;
      state.resultsLoading = false;
    },
  },
});

export const { fetchResults } = resultsSlice.actions;
export const resultsReducer = resultsSlice.reducer;
