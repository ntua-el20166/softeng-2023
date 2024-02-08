const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { csvPrint, printJson } = require("../utils/csvWriter");

async function searchTitle(options) {
  try {
    format = options.format ?? "json";
    const response = await axios.post(
      `${apiBaseUrl}/searchtitle?format=${format}`,
      {
        titlePart: options.titlepart,
      }
    );
    const titles = response.data;

    if (options.format === "csv") {
      csvPrint(titles);
    } else {
      printJson(titles);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

module.exports = (program) => {
  program
    .command("searchtitle")
    .requiredOption(
      "--titlepart <titlepart>",
      "Part of the title to search for"
    )
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(searchTitle);
};
