const { getPersonInfoPost, nameObjectPost } = require("./helpers_Post.js");
const { fetchData } = require("../apiService.js");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");

async function getNamePost(req, res) {
  try {
    const { nameID } = req.params;
    const response = await fetchData(`/person/${nameID}`);
    const data = response;
    const birthYear = data.birthday ? data.birthday.substring(0, 4) : null;
    const deathYear = data.deathday ? data.deathday.substring(0, 4) : null;
    const data2 = await getPersonInfoPost(data.id);
    const nameObject1 = new nameObjectPost(
      data.id.toString(),
      data.name,
      data.profile_path,
      data.biography,
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

async function getSearchNameResultPost(req, res) {
  const { namePart } = req.body;
  if (!namePart) {
    res.status(204).send([]);
    return;
  }
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
      const data2 = await getPersonInfoPost(object.id);
      const nameObject1 = new nameObjectPost(
        object.id.toString(),
        object.name,
        object.profile_path,
        data.biography,
        birthYear,
        deathYear,
        object.known_for_department,
        data2.nameTitles
      );
      listOfNameObjects.push(nameObject1);
    }
    checkResultEmpty(listOfNameObjects);
    res.status(200).json(listOfNameObjects);
  } catch (error) {
    errorHandler(error, res);
  }
}

module.exports = {
  getSearchNameResultPost,
  getNamePost,
};
