const {
  getMovieInfo,
  titleObject,
  gqueryObject,
  normalizeString,
  searchTitleHelp,
  getTvInfo,
} = require("./helpers.js");
const { fetchData } = require("./apiService.js");

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
  res.send(await searchTitleHelp(req.body.titlePart));
}

async function byGenre(req, res) {
  const gqueryObject = req.body;
  let date_to = gqueryObject.yrTo + "2024-12-31";
  let date_from = gqueryObject.yrFrom + "2010-01-01";
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
  res.send(to_send);
}

module.exports = {
  searchTitle,
  byGenre,
  getFilterSearchResults,
};
