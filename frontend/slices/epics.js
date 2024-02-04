import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { from, forkJoin, of, tap } from "rxjs";
import { mergeMap, catchError, map, filter } from "rxjs/operators";
import { popularMoviesSlice } from "./reducers/popularMovies";
import {
  fetchResultsSucceeded,
  fetchResultsFailed,
  fetchSingleTitleSucceeded,
  fetchSingleNameSucceeded,
} from "./reducers";
import axios from "axios";

import { backendUrl } from "../constants";

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

const fetchSingleMovieEpic = (action$) =>
  action$.pipe(
    ofType("singleTitle/fetchSingleMovie"),
    mergeMap(({ payload }) =>
      from(
        axios.post(`${backendUrl}/title2/${payload.titleID}`, {
          type: "movie",
        })
      ).pipe(
        map(({ data }) => {
          return fetchSingleTitleSucceeded(data);
        }),
        catchError((error) =>
          of(popularMoviesSlice.actions.fetchPopularMoviesFailed(error))
        )
      )
    )
  );
const fetchSingleTvEpic = (action$) =>
  action$.pipe(
    ofType("singleTitle/fetchSingleTv"),
    mergeMap(({ payload }) =>
      from(
        axios.post(`${backendUrl}/title2/${payload.titleID}`, {
          type: "tv",
        })
      ).pipe(
        map(({ data }) => {
          return fetchSingleTitleSucceeded(data);
        }),
        catchError((error) =>
          of(popularMoviesSlice.actions.fetchPopularMoviesFailed(error))
        )
      )
    )
  );

const fetchSingleNameEpic = (action$) =>
  action$.pipe(
    ofType("singleName/fetchSingleName"),
    mergeMap(({ payload }) =>
      from(axios.get(`${backendUrl}/name/${payload.nameID}`)).pipe(
        map(({ data }) => {
          return fetchSingleNameSucceeded(data);
        }),
        catchError((error) =>
          of(popularMoviesSlice.actions.fetchPopularMoviesFailed(error))
        )
      )
    )
  );

// const fetchResultsEpic = (action$) =>
//   action$.pipe(
//     ofType("results/fetchResults"),
//     mergeMap(({ payload }) =>
//       forkJoin({
//         titles: from(
//           axios.post(`${backendUrl}/searchtitle`, {
//             titlePart: payload.titlePart,
//           })
//         ).pipe(map(({ data }) => data)),
//         names: from(
//           axios.post(`${backendUrl}/searchname`, {
//             namePart: payload.titlePart,
//           })
//         ).pipe(map(({ data }) => data)),
//       }).pipe(
//         map(({ titles, names }) => fetchResultsSucceeded({ titles, names })),
//         catchError((error) => {
//           of(fetchResultsFailed(error.message));
//         })
//       )
//     )
//   );

const helper = (first, second) => {
  axios.post(`${backendUrl}/bygenre`, {
    qgenre: first,
    minrating: payload.rating,
    yrTo: "2024",
    yrFrom: "1800",
  });
  axios.post(`${backendUrl}/bygenre`, {
    qgenre: second,
    minrating: payload.rating,
    yrTo: "2024",
    yrFrom: "1800",
  });
};

const newFetchResultsEpic = (action$) =>
  action$.pipe(
    ofType("results/fetchResults"),
    mergeMap(({ payload }) =>
      forkJoin({
        titles: from(
          payload.titlePart !== ""
            ? axios.post(`${backendUrl}/searchtitle`, {
                titlePart: payload.titlePart,
              })
            : axios.post(`${backendUrl}/bygenre`, {
                qgenre: payload.genre,
                minrating: payload.rating,
                yrTo: "2024",
                yrFrom: "1800",
              })
          // : () => {
          //     switch (payload.genre) {
          //       case "Action":
          //         helper("action", "action & adventure");
          //         break;
          //       case "Adventure":
          //         helper("adventure", "action & adventure");
          //         break;
          //       case "Fantasy":
          //         helper("fantasy", "sci-fi & fantasy");
          //         break;
          //       case "Sci-Fi":
          //         helper("science fiction", "sci-fi & fantasy");
          //         break;
          //       default:
          //         axios.post(`${backendUrl}/bygenre`, {
          //           qgenre: payload.genre,
          //           minrating: payload.rating,
          //           yrTo: "2024",
          //           yrFrom: "1800",
          //         });
          //     }
          //   }
        ).pipe(
          map(({ data }) =>
            data.filter((title) => {
              console.log(payload, title);
              return (
                (!payload.rating || title.rating.avRating >= payload.rating) &&
                (!payload.genre ||
                  title.genres.some(
                    ({ genreTitle }) => genreTitle === payload.genre
                  )) &&
                (payload.titlePart !== "" ||
                  title.originalTitle.includes(payload.titlePart))
              );
            })
          )
        ),
        names: from(
          axios.post(`${backendUrl}/searchname`, {
            namePart: payload.titlePart,
          })
        ).pipe(map(({ data }) => data)),
      }).pipe(
        map(({ titles, names }) => fetchResultsSucceeded({ titles, names })),
        catchError((error) => {
          of(fetchResultsFailed(error.message));
        })
      )
    )
  );
export const rootEpic = combineEpics(
  fetchPopularMoviesEpic,
  //fetchResultsEpic,
  fetchSingleNameEpic,
  fetchSingleTvEpic,
  fetchSingleMovieEpic,
  newFetchResultsEpic
);
