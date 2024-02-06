const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { writeCsv, printJson } = require("../utils/csvWriter");

async function byGenre(options) {
  try {
    const queryParams = {
      genre: options.genre,
      minrating: options.min,
      yrFrom: options.from,
      yrTo: options.to,
    };
    const response = await axios.post(`${apiBaseUrl}/bygenre`, queryParams);
    const titles = response.data;

    if (options.format === "csv") {
      writeCsv(titles, "bygenre", [
        { id: "titleID", title: "Title ID" },
        { id: "type", title: "Type" },
        { id: "originalTitle", title: "Original Title" },
        { id: "titlePoster", title: "Title Poster" },
        { id: "startYear", title: "Start Year" },
        { id: "endYear", title: "End Year" },
        { id: "genres", title: "Genres" },
        { id: "titleAkas", title: "Title Akas" },
        { id: "principals", title: "Principals" },
        { id: "rating", title: "Rating" },
      ]);
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
