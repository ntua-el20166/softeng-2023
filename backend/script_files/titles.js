const { getMovieInfo, getTvInfo } = require("./helpers.js");
const { getMovieInfo2, getTvInfo2 } = require("./helpers2.js");
const { fetchData } = require("./apiService.js");

async function getPopularMovies(req, res) {
  let response = await fetchData(`/trending/movie/day`);
  const movies = response.results;
  let to_send = await Promise.all(
    movies.map(async (obj) => {
      return await getMovieInfo(obj);
    })
  );
  res.send({ result: to_send });
}
async function getSimilarMovies(req, res) {
  try {
    let response, ret, to_send;
    if (req.body.movie_id === undefined || isNaN(req.body.movie_id)) {
      res.status(400).send("Bad request");
      return;
    }
    if (req.body.type == "tv") {
      response = await fetchData(`/tv/${req.body.movie_id}/similar`);
      ret = response.results;
      to_send = await Promise.all(
        ret?.map(async (obj) => {
          return await getTvInfo(obj);
        }) ?? []
      );
    } else if (req.body.type == "movie") {
      response = await fetchData(`/movie/${req.body.movie_id}/similar`);
      ret = response.results;
      to_send = await Promise.all(
        ret?.map(async (obj) => {
          return await getMovieInfo(obj);
        }) ?? []
      );
    } else {
      res.status(400).send("Bad request");
      return;
    }

    if (to_send.length === 0) {
      res.status(204).send({ result: to_send });
    } else {
      res.status(200).send({ result: to_send });
    }
  } catch (error) {
    // if (error.response.data.status_code == 34) {
    //   res.status(204).send({ result: [] }); //////// error codes+++
    // }
    if (error.response.data.status_code == 34) {
      res.status(400).send("Bad request");
    } else {
      res.status(500).send("Internal server error");
    }
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

async function getTitle2(req, res) {
  try {
    let response;
    let ret;
    if (req.body.type == "tv") {
      response = await fetchData(`/tv/${req.params.titleID}`);
      ret = await getTvInfo2(response);
    } else {
      response = await fetchData(`/movie/${req.params.titleID}`);
      ret = await getMovieInfo2(response);
    }

    res.send(ret);
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
}

module.exports = {
  getPopularMovies,
  getSimilarMovies,
  getTitle,
  getTitle2,
};
