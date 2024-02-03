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
    fetchSingleTitle: (state) => {
      state.singleTitleLoading = true;
    },
    fetchSingleTitleSucceeded: (state, { payload }) => {
      state.singleTitle = payload;
      state.singleTitleLoading = false;
    },
  },
});

export const { setSingleTitle, fetchSingleTitle, fetchSingleTitleSucceeded } =
  singleTitleSlice.actions;
export const singleTitleReducer = singleTitleSlice.reducer;
