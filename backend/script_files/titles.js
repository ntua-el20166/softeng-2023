const { getMovieInfo, getTvInfo } = require("./helpers.js");
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
    let response = await fetchData(`/movie/${req.body.movie_id}/similar`);
    const movies = response.results;

    let to_send = await Promise.all(
      movies?.map(async (obj) => {
        return await getMovieInfo(obj);
      }) ?? []
    );
    res.send({ result: to_send });
  } catch (error) {
    if (error.response.data.status_code == 34) {
      res.send({ result: [] }); //////// error codes+++
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

async function getTitle2(req, res) {
  try {
    let response;
    let ret;
    if (req.query.type == "tv") {
      response = await fetchData(`/tv/${req.params.titleID}`);
      ret = await getTvInfo(response.data);
    } else {
      response = await fetchData(`/movie/${req.params.titleID}`);
      ret = await getMovieInfo(response.data);
    }

    res.send({ titleObject: ret });
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