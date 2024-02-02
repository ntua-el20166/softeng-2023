import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import {
  singleTitleReducer,
  resultsReducer,
  popularMoviesReducer,
  rootEpic,
} from "./slices";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    singleTitle: singleTitleReducer,
    results: resultsReducer,
    popularMovies: popularMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
