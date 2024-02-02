import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { from, forkJoin, of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";
import { popularMoviesSlice } from "../reducers/popularMovies";
import { fetchResultsSucceeded, fetchResultsFailed } from "../reducers";
import axios from "axios";

import { backendUrl } from "../../constants";

const fetchPopularMoviesEpic = (action$) =>
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

const fetchResultsEpic = (action$) =>
  action$.pipe(
    ofType("results/fetchResults"),
    mergeMap(({ payload }) =>
      forkJoin({
        titles: from(
          axios.post(`${backendUrl}/searchtitle`, {
            titlePart: payload.titlePart,
          })
        ).pipe(map(({ data }) => data)),
        names: from(
          axios.post(`${backendUrl}/searchname`, {
            namePart: payload.titlePart,
          })
        ).pipe(map(({ data }) => data)),
      }).pipe(
        map(({ titles, names }) => fetchResultsSucceeded({ titles, names })),
        catchError((error) => of(fetchResultsFailed(error.message)))
      )
    )
  );

export const rootEpic = combineEpics(fetchPopularMoviesEpic, fetchResultsEpic);
