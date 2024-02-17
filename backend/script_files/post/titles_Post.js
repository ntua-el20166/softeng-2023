const { getMovieInfoPost, getTvInfoPost } = require("./helpers_Post.js");
const { fetchData } = require("../apiService.js");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");

async function getTitlePost(req, res) {
  try {
    let response;
    let ret;
    if (req.body.type == "tv") {
      response = await fetchData(`/tv/${req.params.titleID}`);
      ret = await getTvInfoPost(response);
    } else if (req.body.type == "movie") {
      response = await fetchData(`/movie/${req.params.titleID}`);
      ret = await getMovieInfoPost(response);
    } else {
      const error = new Error("Bad Request");
      error.statusCode = 400;
      throw error;
    }

    checkResultEmpty(ret);
    res.send(ret);
  } catch (error) {
    errorHandler(error, res);
  }
}

module.exports = {
  getTitlePost,
};
