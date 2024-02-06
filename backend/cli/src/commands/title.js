const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { writeCsv, printJson } = require("../utils/csvWriter");

async function fetchTitle(options) {
  try {
    const response = await axios.get(`${apiBaseUrl}/title/${options.titleID}`);
    const data = response.data;

    if (options.format === "csv") {
      writeCsv([data], "title", [
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
