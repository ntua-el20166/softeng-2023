const express = require("express");
const { error } = require("console");
const cors = require("cors");

const app = express();
const port = 9876;
const bodyParser = require("body-parser");
const { start } = require("repl");
const { get } = require("http");
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
const { getHealthCheck } = require("./healthcheck.js");

const {
  getPopularMovies,
  getSimilarMovies,
  getTitle,
  getTitle2,
} = require("./titles.js");

const {
  getSearchNameResult,
  getName,
  getSearchNameResult2,
} = require("./names.js");

const {
  searchTitle,
  byGenre,
  getFilterSearchResults,
  getFilterSearchResults2,
} = require("./title search and filters.js");

const {
  searchTitlePost,
  byGenrePost,
} = require("./with_post_method/title_search_and_filters.js");

app.get("/ntuaflix_api/popular_movies", getPopularMovies);

app.get("/ntuaflix_api/similar_movies", getSimilarMovies);

app.get("/ntuaflix_api/searchtitle", searchTitle);

app.get("/ntuaflix_api/bygenre", byGenre);

app.get("/ntuaflix_api/title/:titleID", getTitle);

app.get("/ntuaflix_api/filtersearch", getFilterSearchResults2);

app.get("/ntuaflix_api/searchname", getSearchNameResult);

app.get("/ntuaflix_api/searchname/:namePart", getSearchNameResult2);

app.get("/ntuaflix_api/name/:nameID", getName);

app.get("/ntuaflix_api/admin/healthcheck", getHealthCheck);

app.post("/ntuaflix_api/searchtitle", searchTitlePost);

app.post("/ntuaflix_api/bygenre", byGenrePost);

app.post("/ntuaflix_api/searchname", getSearchNameResult);

app.post("/ntuaflix_api/title2/:titleID", getTitle2);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//const stringSimilarity = require("string-similarity");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
