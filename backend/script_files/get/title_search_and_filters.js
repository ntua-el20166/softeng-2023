const {
  getMovieInfo,
  normalizeString,
  searchTitleHelp,
  getTvInfo,
} = require("./helpers.js");
const { fetchData } = require("../apiService.js");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");
const { csvformat } = require("../csvformat.js");

async function getFilterSearchResults(req, res) {
  // let date_to = gqueryObject.yrTo + "-12-31";
  // let date_from = gqueryObject.yrFrom + "-01-01";

  let genre = normalizeString(req.body.genre);
  const titlePart = normalizeString(req.body.titlePart);

  const genreList_response = await fetchData(`/genre/movie/list`);
  const genreList = genreList_response.genres;
  let genre_id = genreList.find(
    (obj) => normalizeString(obj.name) == genre
  )?.id;

  const genreList_response2 = await fetchData(`/genre/tv/list`);

  const genreList2 = genreList_response2.genres;
  let genre_id2 = genreList2.find(
    (obj) => normalizeString(obj.name) == genre
  )?.id;
  if (!(genre_id || genre_id2)) {
    res.status(400).send("Invalid genre name");
    return;
  }
  let movies = [];
  let tvs = [];
  if (genre_id) {
    let movie_response = await fetchData(
      `/discover/movie?with_genres=${genre_id}&vote_average.gte=${req.body.minrating}`
    );
    movies = movie_response.results.map((obj) => ({
      ...obj,
      type: "movie",
    }));
  }
  if (genre_id2) {
    let tv_response = await fetchData(
      `/discover/tv?with_genres=${genre_id2}&vote_average.gte=${req.body.minrating}`
    );
    tvs = tv_response.results.map((obj) => ({ ...obj, type: "tv" }));
  }

  let data = movies.concat(tvs);
  data.sort((a, b) => b.popularity - a.popularity);

  let to_send = await Promise.all(
    data.map(async (obj) => {
      if (obj.type == "movie") {
        return await getMovieInfo(obj);
      } else {
        return await getTvInfo(obj);
      }
    })
  );

  const final_to_send = to_send.filter((item) => {
    return (
      normalizeString(item.originalTitle).includes(titlePart) ||
      (item.titleAkas.length > 0 &&
        item.titleAkas.some((altTitle) =>
          normalizeString(altTitle.AkaTitle).includes(titlePart)
        ))
    );
  });

  res.send({ result: final_to_send });
}

async function searchTitle(req, res) {
  const { titlePart } = req.body;
  const { format } = req.query ?? "json";
  try {
    if (!titlePart) {
      const error = new Error("titlePart is required");
      error.response = { status: 400 };
      throw error;
    }
    ret = await searchTitleHelp(req.body.titlePart);
    if (format === "csv") {
      csvformat(ret, res);
    } else {
      res.status(200).json(ret);
    }
  } catch (error) {
    errorHandler(error, res);
  }
}

async function byGenre(req, res) {
  try {
    const gqueryObject = req.body;
    const { format } = req.query ?? "json";
    const requiredKeys = ["qgenre", "minrating"];
    const optionalKeys = ["qgenre", "minrating", "yrFrom", "yrTo"];

    const keys = Object.keys(gqueryObject);

    if (
      JSON.stringify(keys) != JSON.stringify(requiredKeys) &&
      JSON.stringify(keys) != JSON.stringify(optionalKeys)
    ) {
      const error = new Error("namePart is required");
      error.response = { status: 400 };
      throw error;
    }

    let date_to = gqueryObject.yrTo
      ? gqueryObject.yrTo + "-12-31"
      : "2024-12-31";
    let date_from = gqueryObject.yrTo
      ? gqueryObject.yrFrom + "-01-01"
      : "1816-01-01";
    let genre = normalizeString(gqueryObject.qgenre);

    const genreList_response = await fetchData(`/genre/movie/list`);
    const genreList = genreList_response.genres;
    let genre_id = genreList.find(
      (obj) => normalizeString(obj.name) == genre
    )?.id;

    const genreList_response2 = await fetchData(`/genre/tv/list`);

    const genreList2 = genreList_response2.genres;
    let genre_id2 = genreList2.find(
      (obj) => normalizeString(obj.name) == genre
    )?.id;
    if (!(genre_id || genre_id2)) {
      res.status(400).send("Invalid genre name");
      return;
    }
    let movies = [];
    let tvs = [];
    if (genre_id) {
      let movie_response = await fetchData(
        `/discover/movie?with_genres=${genre_id}&vote_average.gte=${gqueryObject.minrating}&primary_release_date.gte=${date_from}&primary_release_date.lte=${date_to}`
      );
      movies = movie_response.results.map((obj) => ({
        ...obj,
        type: "movie",
      }));
    }
    if (genre_id2) {
      let tv_response = await fetchData(
        `/discover/tv?with_genres=${genre_id2}&vote_average.gte=${gqueryObject.minrating}&first_air_date.gte=${date_from}&first_air_date.lte=${date_to}`
      );
      tvs = tv_response.results.map((obj) => ({ ...obj, type: "tv" }));
    }

    let data = movies.concat(tvs);
    data.sort((a, b) => b.popularity - a.popularity);

    let to_send = await Promise.all(
      data.map(async (obj) => {
        if (obj.type == "movie") {
          return await getMovieInfo(obj);
        } else {
          return await getTvInfo(obj);
        }
      })
    );
    checkResultEmpty(to_send);
    if (format === "csv") {
      csvformat(to_send, res);
    } else {
      res.status(200).json(to_send);
    }
  } catch (error) {
    errorHandler(error, res);
  }
}

module.exports = {
  searchTitle,
  byGenre,
  getFilterSearchResults,
};
