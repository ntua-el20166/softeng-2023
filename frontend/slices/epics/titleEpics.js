import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";
import { popularMoviesSlice } from "../reducers/popularMovies";
import axios from "axios";

import { backendUrl } from "../../constants";

export const fetchPopularMoviesEpic = (action$) =>
  action$.pipe(
    ofType("popularMovies/fetchPopularMovies"),
    mergeMap((action) =>
      from(axios.get(`${backendUrl}/popular_movies?duration=day`)).pipe(
        map(({ data }) => {
          return popularMoviesSlice.actions.fetchPopularMoviesSucceeded(
            data.result
          );
        }),
        catchError((error) =>
          of(popularMoviesSlice.actions.fetchPopularMoviesFailed(error))
        )
      )
    )
  );
