const axios = require("axios");
const { apiBaseUrl } = require("../../config");
const { writeCsv, printJson } = require("../../utils/csvWriter");

async function fetchName(options) {
  try {
    const response = await axios.get(`${apiBaseUrl}/name/${options.nameid}`);
    const data = response.data;

    if (options.format === "csv") {
      writeCsv([data], "name", [
        { id: "nameID", title: "Name ID" },
        { id: "name", title: "Name" },
        { id: "namePoster", title: "Name Poster" },
        { id: "birthYr", title: "Birth Year" },
        { id: "deathYr", title: "Death Year" },
        { id: "profession", title: "Profession" },
        { id: "nameTitles", title: "Name Titles" },
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
    .command("name")
    .requiredOption("--nameid <nameid>", "ID of the person")
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(fetchName);
};
