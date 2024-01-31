const express = require("express");
const axios = require("axios");
const { error } = require("console");

const app = express();
const api_key = "f98bafc1f4c7d1e56519e6d382d1774f";
const port = 9876;
const url = "https://api.themoviedb.org/3";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ntuaflix_api/searchtitle", (req, res) => {
  axios
    .get(`${url}/search/movie?query=${req.titlePart}&api_key=${api_key}`)
    .then((response) => {
      //kolpa sto response
      console.log(response.data.results);
      res.send(response.data.results);
    });

  //imdb api call
  //data response from api imdb

  //res.send(data)
});

app.get('/ntuaflix_api/searchname', (req, res)=> {
  const { namePart } = req.body;
  axios
    .get(`${url}/search/person?query=${namePart}&api_key=${api_key}`)
    .then((response) => {
      const responseData = response.data.results;      
      const filterdData = responseData
        .filter((person) => person.name ||  person.name.includes(namePart))
        .map((person) =>({
          personName: person.name
        }))
      res.status(200).send(filterdData);
      console.log(filterdData)
    })
    .catch((error) => {
      if (error.response) {
        const statusCode = error.response.status;

        if (statusCode === 400) {
          res.status(400).send('Bad request'); // 400 Bad request
        } else if (statusCode === 404) {
          res.status(404).send('Not available'); // 404 Not available
        } else {
          res.status(500).send('Internal server error'); // Other status codes
        }
      } else if (error.request) {
        console.error('No response received from server');
        res.status(500).send('Internal Server Error'); // 500 Internal server error
      } else {
        console.error('Error setting up the request:', error.message);
        res.status(500).send('Internal Server Error'); // 500 Internal server error
      }
    });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

