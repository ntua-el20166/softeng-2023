import { configureStore } from "@reduxjs/toolkit";
import { singleTitleReducer, resultsReducer } from "./slices";

export const store = configureStore({
  reducer: { singleTitle: singleTitleReducer, results: resultsReducer },
});
