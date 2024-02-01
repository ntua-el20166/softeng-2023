const express = require("express");
const axios = require("axios");

const app = express();
const api_key = "f98bafc1f4c7d1e56519e6d382d1774f";
const port = 9876;
const url = "https://api.themoviedb.org/3";

const bodyParser = require("body-parser");
const { start } = require("repl");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

class titleObject {
  constructor(
    titleID,
    type,
    originalTitle,
    titlePoster,
    startYear,
    endYear = null,
    genres,
    titleAkas,
    principals,
    rating
  ) {
    this.titleID = titleID;
    this.type = type;
    this.originalTitle = originalTitle;
    this.titlePoster = titlePoster;
    this.startYear = startYear;
    this.endYear = endYear;
    this.genres = genres;
    this.titleAkas = titleAkas;
    this.principals = principals;
    this.rating = rating;
  }
}

app.get("/ntuaflix_api/searchtitle", (req, res) => {
  axios
    .get(`${url}/search/multi?query=${req.body.titlePart}&api_key=${api_key}`)
    .then((response) => {
      //kolpa sto response

      const results = response.data.results;

      console.log("AAAAAAAAAAAAAAAAAAAA");
      console.log(results);
      var to_send = results.map((jsonObject) => {
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
          axios
            .get(`${url}/tv/${series_id}?api_key=${api_key}`)
            .then((response) => {
              genres = response.data.genres.map((genre) => {
                return { genreTitle: genre.name };
              });
              // rating = response.data.vote_average;
              // votes = response.data.vote_count;
              start_year = response.data.first_air_date.substring(0, 4);
              last_year = response.data.last_air_date.substring(0, 4);
            });

          ///////before
          axios
            .get(`${url}/tv/${series_id}/alternative_titles?api_key=${api_key}`)
            .then((response) => {
              alternative_titles =
                response.data.titles?.map((title) => {
                  return {
                    AkaTitle: title.title,
                    regionAbbr: title.iso_3166_1,
                  };
                }) || [];
            });
          axios
            .get(`${url}/tv/${series_id}/credits?api_key=${api_key}`)
            .then((response) => {
              const cast = response.data.cast;
              var one = cast.map((person) => {
                return {
                  nameID: person.id,
                  name: person.name,
                  category: person.known_for_department,
                };
              });
              const crew = response.data.cast;
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
          axios
            .get(`${url}/movie/${movie_id}?api_key=${api_key}`)
            .then((response) => {
              genres = response.data.genres.map((genre) => {
                return { genreTitle: genre.name };
              });
              // rating = response.data.vote_average;
              // votes = response.data.vote_count;
            });
          axios
            .get(
              `${url}/movie/${movie_id}/alternative_titles?api_key=${api_key}`
            )
            .then((response) => {
              alternative_titles =
                response.data.titles?.map((title) => {
                  return { AkaTitle: title, regionAbbr: title.iso_3166_1 };
                }) || [];
            });
          axios
            .get(`${url}/movie/${movie_id}/credits?api_key=${api_key}`)
            .then((response) => {
              const cast = response.data.cast;
              var one = cast.map((person) => {
                return {
                  nameID: person.id,
                  name: person.name,
                  category: person.known_for_department,
                };
              });
              const crew = response.data.cast;
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
      });

      res.send(to_send);
    });

  //imdb api call
  //data response from api imdb

  //res.send(data)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// added comment
