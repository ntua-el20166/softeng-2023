import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    resultsLoading: false,
    titleResults: [],
    nameResults: [],
    lastSearchInput: null,
    error: null,
  },
  reducers: {
    fetchResults: (state, { payload }) => {
      state.lastSearchInput = payload.titlePart;
      state.resultsLoading = true;
    },
    fetchResultsSucceeded: (state, { payload }) => {
      state.titleResults = payload.titles;
      state.nameResults = payload.names;
      state.resultsLoading = false;
    },
    fetchResultsFailed: (state, { payload }) => {
      state.resultsLoading = false;
      state.error = payload;
    },
  },
});

export const { fetchResults, fetchResultsSucceeded, fetchResultsFailed } =
  resultsSlice.actions;
export const resultsReducer = resultsSlice.reducer;
