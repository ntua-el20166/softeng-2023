import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    resultsLoading: false,
    titleResults: [],
    nameResults: [],
    error: null,
  },
  reducers: {
    fetchResults: (state) => {
      state.resultsLoading = true;
    },
    fetchResultsSucceeded: (state, { payload }) => {
      state.titleResults = payload.titles;
      state.nameResults = payload.names;
      console.log(payload);
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
