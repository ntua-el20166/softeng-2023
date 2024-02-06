import { createSlice } from "@reduxjs/toolkit";

export const similarTvsSlice = createSlice({
  name: "similarTvs",
  initialState: {
    similarTvsLoading: false,
    similarTvs: [],
    error: null,
  },
  reducers: {
    fetchSimilarTvs: (state) => {
      state.similarTvsLoading = true;
    },
    fetchSimilarTvsSucceeded: (state, { payload }) => {
      state.similarTvsLoading = false;
      state.similarTvs = payload;
    },
    fetchSimilarTvsFailed: (state, { payload }) => {
      state.similarTvsLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchSimilarTvs,
  fetchSimilarTvsSucceeded,
  fetchSimilarTvsFailed,
} = similarTvsSlice.actions;

export const similarTvsReducer = similarTvsSlice.reducer;
