const { fetchData } = require("../apiService");

class nameObjectPost {
  constructor(
    nameID,
    name,
    namePoster,
    bio,
    birthYr,
    deathYr,
    profession,
    nameTitles
  ) {
    this.nameID = nameID;
    this.name = name;
    this.namePoster = namePoster;
    this.bio = bio;
    this.birthYr = birthYr;
    this.deathYr = deathYr;
    this.profession = profession;
    this.nameTitles = nameTitles;
  }
}
class titleObjectPost {
  constructor(
    titleID,
    type,
    originalTitle,
    titlePoster,
    description,
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
    this.description = description;
    this.startYear = startYear;
    this.endYear = endYear;
    this.genres = genres;
    this.titleAkas = titleAkas;
    this.principals = principals;
    this.rating = rating;
  }
}

async function getMovieInfoPost(jsonObject) {
  var movie_id = jsonObject.id;
  var genres;
  var alternative_titles;
  var rating = jsonObject.vote_average;
  var votes = jsonObject.vote_count;
  var principals;

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
        category: "actor",
        character: person.character,
        profile: person.profile_path,
      };
    });
    const crew = response.crew;
    var two = crew.map((person) => {
      return {
        nameID: person.id,
        name: person.name,
        category: "crew",
        character: person.job,
        profile: person.profile_path,
      };
    });
    principals = one.concat(two);
  });
  return new titleObjectPost(
    jsonObject.id,
    "movie",
    jsonObject.original_title,
    jsonObject.poster_path,
    jsonObject.overview,
    jsonObject.release_date.substring(0, 4),
    null,
    genres,
    alternative_titles,
    principals,
    { avRating: rating, nVotes: votes }
  );
}

async function getTvInfoPost(jsonObject) {
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
        category: "actor",
        character: person.character,
        profile: person.profile_path,
      };
    });
    const crew = response.crew;
    var two = crew.map((person) => {
      return {
        nameID: person.id,
        name: person.name,
        category: "crew",
        character: person.job,
        profile: person.profile_path,
      };
    });
    principals = one.concat(two);
  });
  return new titleObjectPost(
    jsonObject.id,
    "tv",
    jsonObject.original_name,
    jsonObject.poster_path,
    jsonObject.overview,
    start_year,
    last_year,
    genres,
    alternative_titles,
    principals,
    { avRating: rating, nVotes: votes }
  );
}

async function getPersonInfoPost(nameID) {
  let nameTitles;
  let response = await fetchData(`/person/${nameID}/combined_credits`);

  const cast = response.cast;
  var one = cast.map((person) => {
    return {
      titleID: person.id,
      type: person.media_type,
      titlePoster: person.poster_path,
      category: "Actor",
      character: person.character,
    };
  });
  const crew = response.crew;
  var two = crew.map((person) => {
    return {
      titleID: person.id,
      type: person.media_type,
      titlePoster: person.poster_path,
      category: "crew",
      character: person.job,
    };
  });
  nameTitles = one.concat(two);

  return {
    nameTitles,
  };
}

module.exports = {
  getMovieInfoPost,
  getTvInfoPost,
  getPersonInfoPost,
  nameObjectPost,
  titleObjectPost,
};
