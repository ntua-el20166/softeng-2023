const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { csvPrint, printJson } = require("../utils/csvWriter");

async function searchName(options) {
  try {
    const format = options.format ?? "json";
    const response = await axios.post(
      `${apiBaseUrl}/searchname?format=${format}`,
      {
        namePart: options.name,
      }
    );
    const names = response.data;

    if (options.format === "csv") {
      csvPrint(names);
    } else {
      printJson(names);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

module.exports = (program) => {
  program
    .command("searchname")
    .requiredOption("--name <name>", "Name of the person to search for")
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(searchName);
};
