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
  getSimilarTitles,
  getTitle,
  getTitlePost,
} = require("./titles.js");

const {
  getSearchNameResult,
  getName,
  getSearchNameResult2,
  getNamePost,
} = require("./names.js");

const { searchTitle, byGenre } = require("./title search and filters.js");

const {
  searchTitlePost,
  byGenrePost,
} = require("./post/title_search_and_filters.js");

app.get("/ntuaflix_api/popular_movies", getPopularMovies);

app.get("/ntuaflix_api/searchtitle", searchTitle);

app.get("/ntuaflix_api/bygenre", byGenre);

app.get("/ntuaflix_api/title/:titleID", getTitle);

app.get("/ntuaflix_api/searchname", getSearchNameResult);

app.get("/ntuaflix_api/name/:nameID", getName);

app.get("/ntuaflix_api/admin/healthcheck", getHealthCheck);

app.post("/ntuaflix_api/searchtitle", searchTitlePost);

app.post("/ntuaflix_api/searchname2", getSearchNameResult2);

app.post("/ntuaflix_api/bygenre", byGenrePost);

app.post("/ntuaflix_api/similar_movies", getSimilarTitles);

app.post("/ntuaflix_api/title2/:titleID", getTitlePost);

app.post("/ntuaflix_api/name2/:nameID", getNamePost);

app.use((req, res, next) => {
  res.status(404).send("Not Available");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
