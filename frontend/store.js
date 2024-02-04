import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import {
  singleTitleReducer,
  resultsReducer,
  popularMoviesReducer,
  similarMoviesReducer,
  singleNameReducer,
  rootEpic,
} from "./slices";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    singleTitle: singleTitleReducer,
    singleName: singleNameReducer,
    results: resultsReducer,
    popularMovies: popularMoviesReducer,
    similarMovies: similarMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
