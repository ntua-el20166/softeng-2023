import { createSlice } from "@reduxjs/toolkit";

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    popularMoviesLoading: false,
    popularMovies: [],
    error: null,
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.popularMoviesLoading = true;
    },
    fetchPopularMoviesSucceeded: (state, { payload }) => {
      state.popularMoviesLoading = false;
      state.popularMovies = payload;
    },
    fetchPopularMoviesFailed: (state, { payload }) => {
      state.popularMoviesLoading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSucceeded,
  fetchPopularMoviesFailed,
} = popularMoviesSlice.actions;

export const popularMoviesReducer = popularMoviesSlice.reducer;
