const path = require("path");
const { errorHandler } = require("./errorHandler.js");
const fs = require("fs");

async function csvformat(data, res) {
  const csvDirectory = path.join(__dirname, "../output/");
  const csvFilePath = path.join(csvDirectory, "output.csv");

  var items = JSON.stringify(data);
  var replacer = function (key, value) {
    return value === null ? "" : value;
  };

  // Parse the JSON string to get an object
  var parsedItems = JSON.parse(items);

  const header = Object.keys(parsedItems);
  const csvContent = [
    header.join(","), // Header row
    header
      .map((fieldName) => JSON.stringify(parsedItems[fieldName], replacer))
      .join(","),
  ].join("\r\n");

  fs.writeFile(csvFilePath, csvContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing CSV file:", err);
      errorHandler(err, res); // Handle the error appropriately
    } else {
      // Send the CSV file as a response
      res.setHeader("Content-Type", "text/csv");
      res.attachment("name.csv");

      const cleanupCsvFile = () => {
        fs.unlink(csvFilePath, (error) => {
          if (error) {
            console.error("Error deleting CSV file:", error);
          } else {
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
}

module.exports = {
  csvformat,
};
