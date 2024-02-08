const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { csvPrint, printJson } = require("../utils/csvWriter");

async function fetchTitle(options) {
  try {
    const format = options.format ?? "json";
    const response = await axios.get(
      `${apiBaseUrl}/title/${options.titleID}?format=${format}`
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
    .command("title")
    .requiredOption("--titleID <titleID>", "ID of the title")
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(fetchTitle);
};
