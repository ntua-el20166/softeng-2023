const { getMovieInfo, getTvInfo } = require("./helpers.js");
const { fetchData } = require("../apiService.js");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");
const { csvformat } = require("../csvformat.js");

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
    if (req.body.type != "tv" && req.body.type != "movie") {
      const error = new Error("Bad Request");
      error.statusCode = 400;
      throw error;
    }
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
    errorHandler(error, res);
  }
}

async function getTitle(req, res) {
  let response;
  let ret;
  const { format } = req.query ?? "json";
  try {
    response = await fetchData(`/movie/${req.params.titleID}`);
    ret = await getMovieInfo(response);
  } catch (error) {
    try {
      response = await fetchData(`/tv/${req.params.titleID}`);
      ret = await getTvInfo(response);
    } catch (error) {
      res.status(400).send("Bad request");
    }
  }
  if (format === "csv") {
    csvformat(ret, res);
  } else {
    res.status(200).json(ret);
  }
}

module.exports = {
  getPopularMovies,
  getSimilarTitles,
  getTitle,
};
