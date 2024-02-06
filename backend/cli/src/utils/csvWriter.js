const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const { outputDirectory } = require("../config");
const path = require("path");

function printJson(data) {
  console.log(JSON.stringify(data, null, 2));
}

function writeCsv(data, filename, headers) {
  const csvWriter = createCsvWriter({
    path: path.join(outputDirectory, `${filename}.csv`),
    header: headers,
  });

  return csvWriter
    .writeRecords(data)
    .then(() => console.log(`${filename}.csv file generated successfully.`))
    .catch((err) => console.error("Error writing CSV file:", err.message));
}

module.exports = {
  printJson,
  writeCsv,
};
