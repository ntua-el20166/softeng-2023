const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { csvPrint, printJson } = require("../utils/csvWriter");

async function byGenre(options) {
  try {
    const queryParams = {
      qgenre: options.genre,
      minrating: options.min,
      yrFrom: options.from ?? 2010,
      yrTo: options.to ?? 2024,
    };
    const format = options.format ?? "json";
    const response = await axios.post(
      `${apiBaseUrl}/bygenre?format=${format}`,
      queryParams
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
    .command("bygenre")
    .requiredOption("--genre <genre>", "Genre of the movie")
    .requiredOption("--min <min>", "Minimum rating of the movie")
    .option("--from <from>", "From year")
    .option("--to <to>", "To year")
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(byGenre);
};
