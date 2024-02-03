import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { from, forkJoin, of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";
import { popularMoviesSlice } from "../reducers/popularMovies";
import {
  fetchResultsSucceeded,
  fetchResultsFailed,
  //ta parakato gia title
  fetchTitleStart,
  fetchTitleSuccess,
  fetchTitleFailure,
} from "../reducers";
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
          axios.get(`${backendUrl}/searchtitle`, {
            titlePart: payload.titlePart,
          })
        ).pipe(map(({ data }) => data)),
        names: from(
          axios.get(`${backendUrl}/searchname`, {
            namePart: payload.titlePart,
          })
        ).pipe(map(({ data }) => data)),
      }).pipe(
        map(({ titles, names }) => fetchResultsSucceeded({ titles, names })),
        catchError((error) => of(fetchResultsFailed(error.message)))
      )
    )
  );

// const fetchtitleEpic = (action$) =>
//   action$.pipe(
//     ofType("singleTitle/setSingleTitle"),
//     mergeMap((payload) =>
//       from(axios.get(`${backendUrl}/title/${payload.titleID}`)).pipe(
//         map((data) => {
//           return singleTitleSlice.actions.setSingleTitle(data.titleObject);
//         }),
//         catchError(
//           console.log("fetchtitleepic error") ///change the error
//         )
//       )
//     )
//   );

const fetchTitleEpic = (action$) =>
  action$.pipe(
    ofType(fetchTitleStart.type),
    mergeMap((action) => {
      // console.log("Action:", action); // Log the action
      return from(
        axios.get(`${backendUrl}/title/${action.payload.titleID}`)
      ).pipe(
        mergeMap((response) =>
          of(fetchTitleSuccess(response.data.titleObject))
        ),
        catchError((error) => of(fetchTitleFailure(error.message)))
      );
    })
  );
export const rootEpic = combineEpics(
  fetchPopularMoviesEpic,
  fetchResultsEpic,
  fetchTitleEpic
);
