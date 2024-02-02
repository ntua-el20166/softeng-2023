import { createSlice } from "@reduxjs/toolkit";

export const singleTitleSlice = createSlice({
  name: "singleTitle",
  initialState: {
    value: null,
  },
  reducers: {
    setSingleTitle: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setSingleTitle } = singleTitleSlice.actions;
export const singleTitleReducer = singleTitleSlice.reducer;
