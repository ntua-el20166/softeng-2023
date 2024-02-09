const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { csvPrint, printJson } = require("../utils/csvWriter");

async function healthcheck(options) {
  try {
    const format = options.format ?? "json";
    const response = await axios.get(
      `${apiBaseUrl}/admin/healthcheck?format=${format}`
    );
    const data = response.data;

    if (options.format === "csv") {
      csvPrint(data);
    } else {
      printJson(data);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1); // Exit with an error code
  }
}

module.exports = (program) => {
  program
    .command("healthcheck")
    .option(
      "--format <format>",
      "Specify the output format (json or csv)",
      "json"
    )
    .action(healthcheck);
};
