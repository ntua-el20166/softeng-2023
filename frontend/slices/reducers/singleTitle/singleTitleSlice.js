// import { createSlice } from "@reduxjs/toolkit";

// export const singleTitleSlice = createSlice({
//   name: "singleTitle",
//   initialState: {
//     value: null,
//   },
//   reducers: {
//     setSingleTitle: (state, { payload }) => {
//       state.value = payload;
//     },
//   },
// });

// export const { setSingleTitle } = singleTitleSlice.actions;
// export const singleTitleReducer = singleTitleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const singleTitleSlice = createSlice({
  name: "singleTitle",
  initialState: {
    title: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchTitleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTitleSuccess: (state, action) => {
      state.loading = false;
      state.title = action.payload;
    },
    fetchTitleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTitleStart, fetchTitleSuccess, fetchTitleFailure } =
  singleTitleSlice.actions;
export const singleTitleReducer = singleTitleSlice.reducer;
