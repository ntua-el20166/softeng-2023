const { getPersonInfo, getTvInfo, nameObject } = require("./helpers.js");
const { getPersonInfo2, getTvInfo2, nameObject2 } = require("./helpers2.js");
const { fetchData } = require("./apiService.js");

async function getSearchNameResult(req, res) {
  const { namePart } = req.body;

  try {
    const response = await fetchData(`/search/person?query=${namePart}`);
    let listOfNameObjects = [];
    objectsArray = response.results;
    for (let i = 0; i < objectsArray.length; i++) {
      const object = objectsArray[i];
      const response2 = await fetchData(`/person/${object.id}`);
      const data = response2;
      const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
      const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
      const data2 = await getPersonInfo(object.id);
      const nameObject1 = new nameObject(
        object.id.toString(),
        object.name,
        object.profile_path,
        birthYear,
        deathYear,
        object.known_for_department,
        data2.nameTitles
      );
      listOfNameObjects.push(nameObject1);
    }
    res.status(200).json(listOfNameObjects);
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

async function getName(req, res) {
  try {
    const { nameID } = req.params;
    const response = await fetchData(`/person/${nameID}`);
    const data = response;
    const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
    const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
    const data2 = await getPersonInfo(data.id);
    const nameObject1 = new nameObject(
      data.id.toString(),
      data.name,
      data.profile_path,
      birthYear,
      deathYear,
      data.known_for_department,
      data2.nameTitles
    );
    res.status(200).json(nameObject1);
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

async function getName2(req, res) {
  try {
    const { nameID } = req.params;
    const response = await fetchData(`/person/${nameID}`);
    const data = response;
    const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
    const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
    const data2 = await getPersonInfo2(data.id);
    const nameObject1 = new nameObject2(
      data.id.toString(),
      data.name,
      data.profile_path,
      data.biography,
      birthYear,
      deathYear,
      data.known_for_department,
      data2.nameTitles
    );
    res.status(200).json(nameObject1);
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

async function getSearchNameResult2(req, res) {
  const { namePart } = req.params;

  try {
    const response = await fetchData(`/search/person?query=${namePart}`);
    let listOfNameObjects = [];
    objectsArray = response.results;
    for (let i = 0; i < objectsArray.length; i++) {
      const object = objectsArray[i];
      const response2 = await fetchData(`/person/${object.id}`);
      const data = response2;
      const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
      const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
      const data2 = await getPersonInfo(object.id);
      const nameObject1 = new nameObject(
        object.id.toString(),
        object.name,
        object.profile_path,
        birthYear,
        deathYear,
        object.known_for_department,
        data2.nameTitles
      );
      listOfNameObjects.push(nameObject1);
    }
    res.status(200).json(listOfNameObjects);
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
  getSearchNameResult,
  getSearchNameResult2,
  getName,
  getName2,
};
