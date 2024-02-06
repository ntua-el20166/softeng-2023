import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { from, forkJoin, of, tap } from "rxjs";
import { mergeMap, catchError, map, filter } from "rxjs/operators";
import { popularMoviesSlice } from "./reducers/popularMovies";

import { similarMoviesSlice } from "./reducers/similarMovies";

import { similarTvsSlice } from "./reducers/similarTvs";
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

const fetchSimilarMoviesEpic = (action$) =>
  action$.pipe(
    ofType("similarMovies/fetchSimilarMovies"),
    mergeMap(({ payload }) =>
      from(
        axios.post(`${backendUrl}/similar_movies`, {
          movie_id: payload.movie_id,
          type: "movie",
        })
      ).pipe(
        map(({ data }) => {
          return similarMoviesSlice.actions.fetchSimilarMoviesSucceeded(
            data.result
          );
        }),
        catchError((error) =>
          of(similarMoviesSlice.actions.fetchSimilarMoviesFailed(error))
        )
      )
    )
  );

const fetchSimilarTvsEpic = (action$) =>
  action$.pipe(
    ofType("similarTvs/fetchSimilarTvs"),
    mergeMap(({ payload }) =>
      from(
        axios.post(`${backendUrl}/similar_movies`, {
          movie_id: payload.tv_id,
          type: "tv",
        })
      ).pipe(
        map(({ data }) => {
          return similarTvsSlice.actions.fetchSimilarTvsSucceeded(data.result);
        }),
        catchError((error) =>
          of(similarTvsSlice.actions.fetchSimilarTvsFailed(error))
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
      from(axios.post(`${backendUrl}/name2/${payload.nameID}`)).pipe(
        map(({ data }) => {
          console.log(data);
          return fetchSingleNameSucceeded(data);
        }),
        catchError((error) =>
          of(popularMoviesSlice.actions.fetchPopularMoviesFailed(error))
        )
      )
    )
  );

const helper = (first, second, payload) => {
  return Promise.all([
    axios.post(`${backendUrl}/bygenre`, {
      qgenre: first,
      minrating: payload.rating,
      yrTo: "2024",
      yrFrom: "2010",
    }),
    axios.post(`${backendUrl}/bygenre`, {
      qgenre: second,
      minrating: payload.rating,
      yrTo: "2024",
      yrFrom: "2010",
    }),
  ]);
};

function getGenreResults(payload) {
  switch (payload.genre) {
    case "Action":
      return helper("action", "action & adventure", payload);
    case "Adventure":
      return helper("adventure", "action & adventure", payload);
    case "Fantasy":
      return helper("fantasy", "sci-fi & fantasy", payload);
    case "Sci-Fi":
      return helper("Science Fiction", "sci-fi & fantasy", payload);
    default:
      return axios.post(`${backendUrl}/bygenre`, {
        qgenre: payload.genre,
        minrating: payload.rating,
        yrTo: "2024",
        yrFrom: "2010",
      });
  }
}

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
            : getGenreResults(payload)
        ).pipe(
          map((response) => {
            console.log(response);
            if (response.data) {
              return response.data;
            }
            return response.reduce(
              (data, current) => [...data, ...current.data],
              []
            );
          }),
          map((data) =>
            data.filter((title) => {
              return (
                (!payload.rating || title.rating.avRating >= payload.rating) &&
                (!payload.genre ||
                  title.genres.some(({ genreTitle }) => {
                    switch (payload.genre) {
                      case "Action":
                        return (
                          genreTitle === payload.genre ||
                          genreTitle === "Action & Adventure"
                        );
                      case "Adventure":
                        return (
                          genreTitle === payload.genre ||
                          genreTitle === "Action & Adventure"
                        );
                      case "Fantasy":
                        return (
                          genreTitle === payload.genre ||
                          genreTitle === "Sci-Fi & Fantasy"
                        );
                      case "Sci-Fi":
                        return (
                          genreTitle === "Science Fiction" ||
                          genreTitle === "Sci-Fi & Fantasy"
                        );
                      default:
                        return genreTitle === payload.genre;
                    }
                  })) &&
                (payload.titlePart !== "" ||
                  title.originalTitle.includes(payload.titlePart))
              );
            })
          )
        ),
        names: from(
          axios.get(`${backendUrl}/searchname2/${payload.titlePart}`)
        ).pipe(map(({ data }) => data)),
      }).pipe(
        map(({ titles, names }) => fetchResultsSucceeded({ titles, names })),
        catchError((error) => {
          of(popularMoviesSlice.actions.fetchPopularMoviesFailed(error));
        })
      )
    )
  );
export const rootEpic = combineEpics(
  fetchPopularMoviesEpic,
  fetchSingleNameEpic,
  fetchSingleTvEpic,
  fetchSingleMovieEpic,
  fetchSimilarTvsEpic,
  fetchSimilarMoviesEpic,
  newFetchResultsEpic
);
