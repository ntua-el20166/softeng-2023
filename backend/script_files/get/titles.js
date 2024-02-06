const { getMovieInfo, getTvInfo } = require("./helpers.js");
const { fetchData } = require("../apiService.js");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");

async function getPopularMovies(req, res) {
  try {
    const response = await fetchData(`/trending/movie/day`);
    const movies = response.results;
    let to_send = await Promise.all(
      movies.map(async (obj) => {
        return await getMovieInfo(obj);
      })
    );
    checkResultEmpty(to_send);
    res.send(to_send);
  } catch (error) {
    errorHandler(error, res);
  }
}
async function getSimilarTitles(req, res) {
  try {
    let response, ret, to_send;

    response = await fetchData(
      `/${req.body.type}/${req.body.movie_id}/similar`
    );
    ret = response.results;
    to_send = await Promise.all(
      ret?.map(async (obj) => {
        if (req.body.type == "tv") {
          return await getTvInfo(obj);
        } else {
          return await getMovieInfo(obj);
        }
      }) ?? []
    );
    checkResultEmpty(to_send);
    res.send(to_send);
  } catch (error) {
    catchError(error, res);
  }
}

async function getTitle(req, res) {
  let response;
  let ret;
  try {
    response = await fetchData(`/movie/${req.params.titleID}`);
    ret = await getMovieInfo(response);
  } catch (error) {
    if (error.response.data.status_code == 34) {
      console.log("No movie");
      try {
        response = await fetchData(`/tv/${req.params.titleID}`);
        ret = await getTvInfo(response);
      } catch (error) {
        if (error.response.data.status_code == 34) {
          res.status(400).send("Bad request");
        }
      }
    }
  }

  res.send(ret);
}

module.exports = {
  getPopularMovies,
  getSimilarTitles,
  getTitle,
};
