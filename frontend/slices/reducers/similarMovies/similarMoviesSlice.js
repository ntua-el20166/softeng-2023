import { createSlice } from "@reduxjs/toolkit";

export const similarMoviesSlice = createSlice({
  name: "similarMovies",
  initialState: {
    similarMoviesLoading: false,
    similarMovies: [],
    error: null,
  },
  reducers: {
    fetchSimilarMovies: (state) => {
      state.similarMoviesLoading = true;
    },
    fetchSimilarMoviesSucceeded: (state, { payload }) => {
      state.similarMoviesLoading = false;
      state.similarMovies = payload;
    },
    fetchSimilarMoviesFailed: (state, { payload }) => {
      state.similarMoviesLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchSimilarMovies,
  fetchSimilarMoviesSucceeded,
  fetchSimilarMoviesFailed,
} = similarMoviesSlice.actions;

export const similarMoviesReducer = similarMoviesSlice.reducer;
