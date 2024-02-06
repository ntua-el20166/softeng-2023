const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { writeCsv, printJson } = require("../utils/csvWriter");

async function searchName(options) {
  try {
    const response = await axios.post(`${apiBaseUrl}/searchname`, {
      namePart: options.name,
    });
    const names = response.data;

    if (options.format === "csv") {
      writeCsv(names, "searchname", [
        { id: "nameID", title: "Name ID" },
        { id: "name", title: "Name" },
        { id: "namePoster", title: "Name Poster" },
        { id: "birthYr", title: "Birth Year" },
        { id: "deathYr", title: "Death Year" },
        { id: "profession", title: "Profession" },
        { id: "nameTitles", title: "Name Titles" },
      ]);
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
