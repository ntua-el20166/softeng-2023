import { createSlice } from "@reduxjs/toolkit";

export const singleTitleSlice = createSlice({
  name: "singleTitle",
  initialState: {
    singleTitle: null,
    singleTitleLoading: false,
  },
  reducers: {
    setSingleTitle: (state, { payload }) => {
      state.singleTitle = payload;
    },
    fetchSingleMovie: (state) => {
      state.singleTitleLoading = true;
    },
    fetchSingleTv: (state) => {
      state.singleTitleLoading = true;
    },
    fetchSingleTitleSucceeded: (state, { payload }) => {
      console.log(payload);
      state.singleTitle = payload;
      state.singleTitleLoading = false;
    },
  },
});

export const {
  setSingleTitle,
  fetchSingleTitleSucceeded,
  fetchSingleMovie,
  fetchSingleTv,
} = singleTitleSlice.actions;
export const singleTitleReducer = singleTitleSlice.reducer;
