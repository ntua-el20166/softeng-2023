const express = require("express");
const axios = require("axios");

const app = express();
const api_key = 'f98bafc1f4c7d1e56519e6d382d1774f';
const port = 9876;
const url = 'https://api.themoviedb.org/3';

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ntuaflix_api/searchtitle", (req, res) => {
  axios.get(`${url}/search/movie?query=Jack+Reacher&api_key=${api_key}`)
  .then((response) => {
    console.log(response.data.results);
  })

  //imdb api call
  //data response from api imdb

  //res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// added comment
