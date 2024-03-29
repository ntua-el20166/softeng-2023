const {
  getMovieInfo,
  titleObject,
  normalizeString,
  getTvInfo,
} = require("../get/helpers.js");
const { fetchData } = require("../apiService.js");
const { csvformat } = require("../csvformat.js");

async function searchTitlePost(req, res) {
  fetchData(`/search/multi?query="${req.body.titlePart}"`).then((response) => {
    const results = response.results;
    const to_send = Promise.all(
      results.map(async (jsonObject) => {
        if (jsonObject.media_type == "person") {
          return null;
        }
        if (jsonObject.media_type == "tv") {
          var series_id = jsonObject.id;
          var genres;
          var alternative_titles;
          var rating = jsonObject.vote_average;
          var votes = jsonObject.vote_count;
          var start_year;
          var last_year;
          var principals;
          await fetchData(`/tv/${series_id}`).then((response) => {
            genres = response.genres.map((genre) => {
              return { genreTitle: genre.name };
            });

            start_year = response.first_air_date.substring(0, 4);
            last_year = response.last_air_date?.substring(0, 4) ?? null;
          });

          await fetchData(`/tv/${series_id}/alternative_titles`).then(
            (response) => {
              alternative_titles =
                response.titles?.map((title) => {
                  return {
                    AkaTitle: title.title,
                    regionAbbr: title.iso_3166_1,
                  };
                }) || [];
            }
          );
          await fetchData(`/tv/${series_id}/credits`).then((response) => {
            const cast = response.cast;
            var one = cast.map((person) => {
              return {
                nameID: person.id,
                name: person.name,
                category: person.known_for_department,
              };
            });
            const crew = response.crew;
            var two = crew.map((person) => {
              return {
                nameID: person.id,
                name: person.name,
                category: person.known_for_department,
              };
            });
            principals = one.concat(two);
          });
          return new titleObject(
            jsonObject.id,
            jsonObject.media_type,
            jsonObject.original_name,
            jsonObject.poster_path,
            start_year,
            last_year,
            genres,
            alternative_titles,
            principals,
            { avRating: rating, nVotes: votes }
          );
        }
        if (jsonObject.media_type == "movie") {
          var movie_id = jsonObject.id;
          var genres;
          var alternative_titles;
          var rating = jsonObject.vote_average;
          var votes = jsonObject.vote_count;
          var principals;
          await fetchData(`/movie/${movie_id}`).then((response) => {
            genres = response.genres.map((genre) => {
              return { genreTitle: genre.name };
            });
          });
          await fetchData(`/movie/${movie_id}/alternative_titles`).then(
            (response) => {
              alternative_titles =
                response.titles?.map((title) => {
                  return {
                    AkaTitle: title.title,
                    regionAbbr: title.iso_3166_1,
                  };
                }) || [];
            }
          );
          await fetchData(`/movie/${movie_id}/credits`).then((response) => {
            const cast = response.cast;
            var one = cast.map((person) => {
              return {
                nameID: person.id,
                name: person.name,
                category: person.known_for_department,
              };
            });
            const crew = response.crew;
            var two = crew.map((person) => {
              return {
                nameID: person.id,
                name: person.name,
                category: person.known_for_department,
              };
            });
            principals = one.concat(two);
          });
          return new titleObject(
            jsonObject.id,
            jsonObject.media_type,
            jsonObject.original_title,
            jsonObject.poster_path,
            jsonObject.release_date.substring(0, 4),
            null,
            genres,
            alternative_titles,
            principals,
            { avRating: rating, nVotes: votes }
          );
        }
      })
    );
    to_send.then((data) => {
      res.send(data);
    });
  });
}

async function byGenrePost(req, res) {
  const { format } = req.query ?? "json";
  const gqueryObject = req.body;
  let date_to = gqueryObject.yrTo + "-12-31";
  let date_from = gqueryObject.yrFrom + "-01-01";
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
  if (format === "csv") {
    csvformat(to_send, res);
  } else {
    res.status(200).json(to_send);
  }
}

module.exports = { searchTitlePost, byGenrePost };
