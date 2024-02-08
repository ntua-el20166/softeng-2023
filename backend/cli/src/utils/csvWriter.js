const Papa = require("papaparse");

function printJson(data) {
  console.log(JSON.stringify(data, null, 2));
}

async function csvPrint(csvContent) {
  console.log(csvContent);
}

module.exports = {
  printJson,
  csvPrint,
};
