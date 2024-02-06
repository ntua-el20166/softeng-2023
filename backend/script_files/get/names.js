const { getPersonInfo, nameObject } = require("./helpers.js");
const { fetchData } = require("../apiService.js");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");

async function getSearchNameResult(req, res) {
  const { namePart } = req.body;

  try {
    if (!namePart) {
      const error = new Error("namePart is required");
      error.response = { status: 400 };
      throw error;
    }
    const response = await fetchData(`/search/person?query=${namePart}`);
    let listOfNameObjects = [];
    objectsArray = response.results;
    for (let i = 0; i < objectsArray.length; i++) {
      const object = objectsArray[i];
      const response2 = await fetchData(`/person/${object.id}`);
      const data = response2;
      const birthYear = data.birthday ? data.birthday.substring(0, 4) : "";
      const deathYear = data.deathday ? data.deathday.substring(0, 4) : "";
      const data2 = await getPersonInfo(object.id);
      const nameObject1 = new nameObject(
        object.id.toString(),
        object.name,
        object.profile_path ?? "",
        birthYear,
        deathYear,
        object.known_for_department ?? "",
        data2.nameTitles
      );
      listOfNameObjects.push(nameObject1);
    }
    const statusCode = listOfNameObjects.length === 0 ? 204 : 200;
    checkResultEmpty(listOfNameObjects);
    res.status(statusCode).json(listOfNameObjects);
  } catch (error) {
    errorHandler(error, res);
  }
}

async function getName(req, res) {
  try {
    const { nameID } = req.params;
    const response = await fetchData(`/person/${nameID}`);
    const data = response;
    const birthYear = data.birthday ? data.birthday.substring(0, 4) : "";
    const deathYear = data.deathday ? data.deathday.substring(0, 4) : "";
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
    checkResultEmpty(nameObject1);
    res.status(200).json(nameObject1);
  } catch (error) {
    errorHandler(error, res);
  }
}

module.exports = {
  getSearchNameResult,
  getName,
};
