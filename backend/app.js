const express = require("express");
const axios = require("axios");
const { error } = require("console");

const app = express();
const api_key = "f98bafc1f4c7d1e56519e6d382d1774f";
const port = 9876;
const url = "https://api.themoviedb.org/3";

const bodyParser = require("body-parser");
const { start } = require("repl");
const { get } = require("http");
app.use(bodyParser.json());

app.use(express.json());

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

async function getMovieInfo(jsonObject) {
  var movie_id = jsonObject.id;
  var genres;
  var alternative_titles;
  var rating = jsonObject.vote_average;
  var votes = jsonObject.vote_count;
  var principals;

  await axios
    .get(`${url}/movie/${movie_id}?api_key=${api_key}`)
    .then((response) => {
      genres = response.data.genres.map((genre) => {
        return { genreTitle: genre.name };
      });
      // rating = response.data.vote_average;
      // votes = response.data.vote_count;
    });

  // rating = response.data.vote_average;
  // votes = response.data.vote_count;

  await axios
    .get(`${url}/movie/${movie_id}/alternative_titles?api_key=${api_key}`)
    .then((response) => {
      alternative_titles =
        response.data.titles?.map((title) => {
          return {
            AkaTitle: title.title,
            regionAbbr: title.iso_3166_1,
          };
        }) || [];
    });
  await axios
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
      const crew = response.data.crew;
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
    "movie",
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

async function getTvInfo(jsonObject) {
  var series_id = jsonObject.id;
  var genres;
  var alternative_titles;
  var rating = jsonObject.vote_average;
  var votes = jsonObject.vote_count;
  var start_year;
  var last_year;
  var principals;

  await axios
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
  // rating = response.data.vote_average;
  // votes = response.data.vote_count;

  // start_year = jsonObject.first_air_date.substring(0, 4);
  // last_year = jsonObject.last_air_date.substring(0, 4);

  ///////before
  await axios
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
  await axios
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
      const crew = response.data.crew;
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
    "tv",
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
app.get("/ntuaflix_api/title2/:titleID", async (req, res) => {
  // const [tvResponse, movieResponse] = await Promise.all([
  //   axios.get(`${url}/tv/${req.body.id}?api_key=${api_key}`),
  //   axios.get(`${url}/movie/${req.body.id}?api_key=${api_key}`)
  // ]);

  // const tv = tvResponse.data;
  // const movie = movieResponse.data;

  // res.send({ tv, movie });
  try {
    let response;
    let ret;
    if (req.body.type == "tv") {
      response = await axios.get(
        `${url}/tv/${req.params.titleID}?api_key=${api_key}`
      );
      ret = await getTvInfo(response.data);
    } else {
      response = await axios.get(
        `${url}/movie/${req.params.titleID}?api_key=${api_key}`
      );
      ret = await getMovieInfo(response.data);
    }

    console.log(response.data);

    res.send({ titleObject: ret });
  } catch (error) {
    // if (error.message=='No data'){
    // console.error('Error:', error.message);
    // res.status(204).send({ error: "No data", status: 204 });
    // }

    if (error.response.data.status_code == 34) {
      console.log("No data");
      res.status(204).end();
    }
  }
});

app.get("/ntuaflix_api/popular_movies", async (req, res) => {
  let response = await axios.get(
    `${url}/trending/movie/${req.body.duration}?api_key=${api_key}`
  );
  const movies = response.data.results;
  let to_send = await Promise.all(
    movies.map(async (obj) => {
      return await getMovieInfo(obj);
    })
  );

  res.send({ result: to_send });
});

app.get("/ntuaflix_api/similar_movies", async (req, res) => {
  let response = await axios.get(
    `${url}/movie/${req.body.movie_id}/similar?api_key=${api_key}`
  );
  console.log("AAAAAAAAAA");
  const movies = response.data.results;
  let to_send = await Promise.all(
    movies?.map(async (obj) => {
      return await getMovieInfo(obj);
    }) ?? []
  );
  res.send({ result: to_send });
});

app.get(
  "/ntuaflix_api/title/:titleID",
  async (req, res) => {
    // const [tvResponse, movieResponse] = await Promise.all([
    //   axios.get(`${url}/tv/${req.body.id}?api_key=${api_key}`),
    //   axios.get(`${url}/movie/${req.body.id}?api_key=${api_key}`)
    // ]);

    // const tv = tvResponse.data;
    // const movie = movieResponse.data;

    // res.send({ tv, movie });
    let response;
    let ret;
    try {
      response = await axios.get(
        `${url}/movie/${req.params.titleID}?api_key=${api_key}`
      );
      ret = await getMovieInfo(response.data);
    } catch (error) {
      if (error.response.data.status_code == 34) {
        console.log("No movie");
        try {
          response = await axios.get(
            `${url}/tv/${req.params.titleID}?api_key=${api_key}`
          );
          ret = await getTvInfo(response.data);
        } catch (error) {
          if (error.response.data.status_code == 34) {
            console.log("No data");
            res.status(204).end();
          }
        }
      }
    }

    res.send({ titleObject: ret });
  }

  // catch (error) {
  //   // if (error.message=='No data'){
  //   // console.error('Error:', error.message);
  //   // res.status(204).send({ error: "No data", status: 204 });
  //   // }

  //   if (error.response.data.status_code==34){
  //   console.log("No data")
  //   res.status(204).end()
  // }}
);

app.get("/ntuaflix_api/searchtitle", (req, res) => {
  axios
    .get(`${url}/search/multi?query=${req.body.titlePart}&api_key=${api_key}`)
    .then((response) => {
      //kolpa sto response

      const results = response.data.results;

      console.log("AAAAAAAAAAAAAAAAAAAA");
      console.log(results);
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
            await axios
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
            await axios
              .get(
                `${url}/tv/${series_id}/alternative_titles?api_key=${api_key}`
              )
              .then((response) => {
                alternative_titles =
                  response.data.titles?.map((title) => {
                    return {
                      AkaTitle: title.title,
                      regionAbbr: title.iso_3166_1,
                    };
                  }) || [];
              });
            await axios
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
                const crew = response.data.crew;
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
            await axios
              .get(`${url}/movie/${movie_id}?api_key=${api_key}`)
              .then((response) => {
                genres = response.data.genres.map((genre) => {
                  return { genreTitle: genre.name };
                });
                // rating = response.data.vote_average;
                // votes = response.data.vote_count;
              });
            await axios
              .get(
                `${url}/movie/${movie_id}/alternative_titles?api_key=${api_key}`
              )
              .then((response) => {
                alternative_titles =
                  response.data.titles?.map((title) => {
                    return {
                      AkaTitle: title.title,
                      regionAbbr: title.iso_3166_1,
                    };
                  }) || [];
              });
            await axios
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
                const crew = response.data.crew;
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
        res.send(data.filter(Boolean));
      });
      //res.send(to_send);
    });

  //imdb api call
  //data response from api imdb

  //res.send(data)
});

class gqueryObject {
  constructor(qgenre, minrating, yrFrom = null, yrTo = null) {
    this.qgenre = qgenre;
    this.minrating = minrating;
    this.yrFrom = yrFrom;
    this.yrTo = yrTo;
  }
}

function normalizeString(str) {
  return str.trim().toLowerCase().replace(/&/g, "and");
}

app.get("/ntuaflix_api/bygenre", async (req, res) => {
  const gqueryObject = req.body;
  let date_to = gqueryObject.yrTo + "-12-31";
  let date_from = gqueryObject.yrFrom + "-01-01";
  let genre = normalizeString(gqueryObject.qgenre);

  const genreList_response = await axios.get(
    `${url}/genre/movie/list?api_key=${api_key}`
  );
  const genreList = genreList_response.data.genres;
  let genre_id = genreList.find(
    (obj) => normalizeString(obj.name) == genre
  )?.id;

  const genreList_response2 = await axios.get(
    `${url}/genre/tv/list?api_key=${api_key}`
  );

  const genreList2 = genreList_response2.data.genres;
  let genre_id2 = genreList2.find(
    (obj) => normalizeString(obj.name) == genre
  )?.id;
  if (!(genre_id || genre_id2)) {
    console.log("Invalid genre name"); /// na mpei error
    res.status(400).send("Invalid genre name");
    return;
  }
  let movies = [];
  let tvs = [];
  if (genre_id) {
    let movie_response = await axios.get(
      `${url}/discover/movie?with_genres=${genre_id}&vote_average.gte=${gqueryObject.minrating}&primary_release_date.gte=${date_from}&primary_release_date.lte=${date_to}&api_key=${api_key}`
    );
    movies = movie_response.data.results.map((obj) => ({
      ...obj,
      type: "movie",
    }));
  }
  if (genre_id2) {
    let tv_response = await axios.get(
      `${url}/discover/tv?with_genres=${genre_id2}&vote_average.gte=${gqueryObject.minrating}&first_air_date.gte=${date_from}&first_air_date.lte=${date_to}&api_key=${api_key}`
    );
    tvs = tv_response.data.results.map((obj) => ({ ...obj, type: "tv" }));
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
  res.send({ result: to_send });
});

// app.get("ntuaflix_api/bygenre", (req, res) => {
//   const gqueryObject = req.body;
//   axios
//     .get(`${url}/genre/movie/${gqueryObject.qgenre}?api_key=${api_key}`)
//     .then(() => {
//       console.log("giorgos");
//     })
//     .catch((error) => {
//       if (error.response) {
//         const statusCode = error.response.status;

//         if (statusCode === 400) {
//           res.status(400).send("Bad request"); // 400 Bad request
//         } else if (statusCode === 404) {
//           res.status(404).send("Not available"); // 404 Not available
//         } else {
//           res.status(500).send("Internal server error"); // Other status codes
//         }
//       } else if (error.request) {
//         console.error("No response received from server");
//         res.status(500).send("Internal Server Error"); // 500 Internal server error
//       } else {
//         console.error("Error setting up the request:", error.message);
//         res.status(500).send("Internal Server Error"); // 500 Internal server error
//       }
//     });
// });

class nameObject {
  constructor(
    nameID,
    name,
    namePoster,
    birthYr,
    deathYr,
    profession,
    nameTitles
  ) {
    this.nameID = nameID;
    this.name = name;
    this.namePoster = namePoster;
    this.birthYr = birthYr;
    this.deathYr = deathYr;
    this.profession = profession;
    this.nameTitles = nameTitles;
  }
}

async function getPersonInfo(nameID) {
  let nameTitles;
  try {
    let response = await axios.get(
      `${url}/person/${nameID}/combined_credits?api_key=${api_key}`
    );

    const cast = response.data.cast;
    var one = cast.map((person) => {
      return {
        titleID: person.id,
        category: "Actor",
      };
    });
    const crew = response.data.crew;
    var two = crew.map((person) => {
      return {
        titleID: person.id,
        category: person.job,
      };
    });
    nameTitles = one.concat(two);

    return {
      nameTitles,
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      nameTitles: [],
    };
  }
}

app.get("/ntuaflix_api/name/:nameID", async (req, res) => {
  try {
    const { nameID } = req.params;
    const response = await axios.get(
      `${url}/person/${nameID}?api_key=${api_key}`
    );
    const data = response.data;
    const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
    const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
    const data2 = await getPersonInfo(data.id);
    const nameObject1 = new nameObject(
      data.id.toString(),
      data.name,
      data.profile_path,
      birthYear,
      deathYear,
      data.known_for_department,
      data2.nameTitles
    );
    console.log(nameObject1);
    res.status(200).json(nameObject1);
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;

      if (statusCode === 400) {
        res.status(400).send("Bad request"); // 400 Bad request
      } else if (statusCode === 404) {
        res.status(404).send("Not available"); // 404 Not available
      } else {
        res.status(500).send("Internal server error"); // Other status codes
      }
    } else if (error.request) {
      console.error("No response received from server");
      res.status(500).send("Internal Server Error"); // 500 Internal server error
    } else {
      console.error("Error setting up the request:", error.message);
      res.status(500).send("Internal Server Error"); // 500 Internal server error
    }
  }
});

app.get("/ntuaflix_api/searchname", async (req, res) => {
  const { namePart } = req.body;

  try {
    const response = await axios.get(
      `${url}/search/person?query=${namePart}&api_key=${api_key}`
    );
    let listOfNameObjects = [];
    objectsArray = response.data.results;
    for (let i = 0; i < objectsArray.length; i++) {
      const object = objectsArray[i];
      const response2 = await axios.get(
        `${url}/person/${object.id}?api_key=${api_key}`
      );
      const data = response2.data;
      const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
      const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
      const data2 = await getPersonInfo(object.id);
      const nameObject1 = new nameObject(
        object.id.toString(),
        object.name,
        object.profile_path,
        birthYear,
        deathYear,
        object.known_for_department,
        data2.nameTitles
      );
      listOfNameObjects.push(nameObject1);
    }
    console.log(listOfNameObjects);
    res.status(200).json(listOfNameObjects);
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;

      if (statusCode === 400) {
        res.status(400).send("Bad request"); // 400 Bad request
      } else if (statusCode === 404) {
        res.status(404).send("Not available"); // 404 Not available
      } else {
        res.status(500).send("Internal server error"); // Other status codes
      }
    } else if (error.request) {
      console.error("No response received from server");
      res.status(500).send("Internal Server Error"); // 500 Internal server error
    } else {
      console.error("Error setting up the request:", error.message);
      res.status(500).send("Internal Server Error"); // 500 Internal server error
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
