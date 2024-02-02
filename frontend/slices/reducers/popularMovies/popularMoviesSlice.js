import { createSlice } from "@reduxjs/toolkit";

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    popularMoviesLoading: false,
    popularMovies: [],
    error: null,
  },
  reducers: {
    fetchPopularMovies: (state, { payload }) => {
      state.popularMoviesLoading = true;
    },
    fetchPopularMoviesSucceeded: (state, { payload }) => {
      state.popularMoviesLoading = false;
      console.log(payload);
      state.popularMovies = payload;
    },
    fetchPopularMoviesFailed: (state, action) => {
      console.log(action);

      state.popularMoviesLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSucceeded,
  fetchPopularMoviesFailed,
} = popularMoviesSlice.actions;

export const popularMoviesReducer = popularMoviesSlice.reducer;
