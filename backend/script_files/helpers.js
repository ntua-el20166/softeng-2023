const { fetchData } = require("./apiService");

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

class gqueryObject {
  constructor(qgenre, minrating, yrFrom = null, yrTo = null) {
    this.qgenre = qgenre;
    this.minrating = minrating;
    this.yrFrom = yrFrom;
    this.yrTo = yrTo;
  }
}

async function getMovieInfo(jsonObject) {
  var movie_id = jsonObject.id;
  var genres;
  var alternative_titles;
  var rating = jsonObject.vote_average;
  var votes = jsonObject.vote_count;
  var principals;

  // await axios
  //   .get(`${url}/movie/${movie_id}?api_key=${api_key}`)
  //   .then((response) => {
  //     genres = response.data.genres.map((genre) => {
  //       return { genreTitle: genre.name };
  //     });
  //   });

  let data = await fetchData(`/movie/${movie_id}`);
  genres = data.genres.map((genre) => {
    return { genreTitle: genre.name };
  });

  await fetchData(`/movie/${movie_id}/alternative_titles`).then((response) => {
    alternative_titles =
      response.titles?.map((title) => {
        return {
          AkaTitle: title.title,
          regionAbbr: title.iso_3166_1,
        };
      }) || [];
  });
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

  await fetchData(`/tv/${series_id}`).then((response) => {
    genres = response.genres.map((genre) => {
      return { genreTitle: genre.name };
    });
    start_year = response.first_air_date.substring(0, 4);
    last_year = response.last_air_date.substring(0, 4);
  });
  await fetchData(`/tv/${series_id}/alternative_titles`).then((response) => {
    alternative_titles =
      response.titles?.map((title) => {
        return {
          AkaTitle: title.title,
          regionAbbr: title.iso_3166_1,
        };
      }) || [];
  });
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

async function getPersonInfo(nameID) {
  let nameTitles;
  try {
    let response = await fetchData(`/person/${nameID}/combined_credits`);

    const cast = response.cast;
    var one = cast.map((person) => {
      return {
        titleID: person.id,
        category: "Actor",
      };
    });
    const crew = response.crew;
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
function normalizeString(str) {
  return str.trim().toLowerCase().replace(/&/g, "and");
}

module.exports = {
  getMovieInfo,
  getTvInfo,
  getPersonInfo,
  nameObject,
  titleObject,
  gqueryObject,
  normalizeString,
};
