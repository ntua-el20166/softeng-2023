const { getPersonInfo, nameObject } = require("./helpers.js");
const { fetchData } = require("../apiService.js");
const path = require("path");
const { errorHandler, checkResultEmpty } = require("../errorHandler.js");
const fs = require("fs");
const { papa } = require("papaparse");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

async function getSearchNameResult(req, res) {
  const { namePart } = req.body;
  const { format } = req.query ?? "json";
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
    if (format === "csv") {
    } else {
      res.status(statusCode).json(listOfNameObjects);
    }
  } catch (error) {
    errorHandler(error, res);
  }
}

async function getName(req, res) {
  try {
    const { nameID } = req.params;
    const { format } = req.query ?? "json";
    try {
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
      if (!nameObject1) {
        const error = new Error();
        error.response = { status: 400 };
        throw error;
      }
      if (format === "csv") {
        const csvDirectory = path.join(__dirname, "../../output/");
        const csvFilePath = path.join(csvDirectory, "output.csv");

        var items = JSON.stringify(nameObject1);
        var replacer = function (key, value) {
          return value === null ? "" : value;
        };

        // Parse the JSON string to get an object
        var parsedItems = JSON.parse(items);

        const header = Object.keys(parsedItems);
        const csvContent = [
          header.join(","), // Header row
          header
            .map((fieldName) =>
              JSON.stringify(parsedItems[fieldName], replacer)
            )
            .join(","),
        ].join("\r\n");

        fs.writeFile(csvFilePath, csvContent, "utf8", (err) => {
          if (err) {
            console.error("Error writing CSV file:", err);
            errorHandler(err, res); // Handle the error appropriately
          } else {
            console.log(`CSV file written to: ${csvFilePath}`);

            // Send the CSV file as a response
            res.setHeader("Content-Type", "text/csv");
            res.attachment("name.csv");

            const cleanupCsvFile = () => {
              fs.unlink(csvFilePath, (error) => {
                if (error) {
                  console.error("Error deleting CSV file:", error);
                } else {
                  console.log("CSV file deleted:", csvFilePath);
                }
              });
            };

            res.status(200).sendFile(csvFilePath, {}, (err) => {
              if (err) {
                errorHandler(err, res);
              } else {
                cleanupCsvFile();
              }
            });
          }
        });
      } else {
        res.status(200).json(nameObject1);
      }
    } catch (e) {
      const error = new Error();
      error.response = { status: 400 };
      throw error;
    }
  } catch (error) {
    errorHandler(error, res);
  }
}

module.exports = {
  getSearchNameResult,
  getName,
};
