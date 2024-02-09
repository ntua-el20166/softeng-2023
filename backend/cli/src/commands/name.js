const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { csvPrint, printJson } = require("../utils/csvWriter");

async function fetchName(options) {
  try {
    const format = options.format ?? "json";
    const response = await axios.get(
      `${apiBaseUrl}/name/${options.nameid}?format=${format}`
    );
    const data = response.data;

    if (options.format === "csv") {
      csvPrint(data);
    } else {
      printJson(data);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}
module.exports = (program) => {
  program
    .command("name")
    .requiredOption("--nameid <nameid>", "ID of the person")
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(fetchName);
};
