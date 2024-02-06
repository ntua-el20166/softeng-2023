const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { writeCsv, printJson } = require("../utils/csvWriter");

async function searchTitle(options) {
  try {
    const response = await axios.post(`${apiBaseUrl}/searchtitle`, {
      titlePart: options.titlepart,
    });
    const titles = response.data;

    if (options.format === "csv") {
      writeCsv(titles, "searchtitle", [
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
