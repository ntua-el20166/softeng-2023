import { createSlice } from "@reduxjs/toolkit";

export const singleNameSlice = createSlice({
  name: "singleName",
  initialState: {
    singleName: null,
    singleNameLoading: false,
  },
  reducers: {
    setSingleName: (state, { payload }) => {
      state.singleName = payload;
    },
    fetchSingleName: (state) => {
      state.singleNameLoading = true;
    },
    fetchSingleNameSucceeded: (state, { payload }) => {
      state.singleName = payload;
      state.singleNameLoading = false;
    },
  },
});

export const { setSingleName, fetchSingleName, fetchSingleNameSucceeded } =
  singleNameSlice.actions;
export const singleNameReducer = singleNameSlice.reducer;
