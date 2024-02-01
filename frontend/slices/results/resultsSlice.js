import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "../../constants";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    resultsLoading: false,
    results: [],
  },
  reducers: {
    fetchResults: async (state, { payload }) => {
      state.resultsLoading = true;
      await axios.get(backendUrl).then((response) => {
        state.results = response;
      });
      state.resultsLoading = false;
    },
  },
});

export const { fetchResults } = resultsSlice.actions;
export const { resultsReducer } = resultsSlice.reducer;
