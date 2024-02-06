const axios = require("axios");
const { apiBaseUrl } = require("../config");
const { writeCsv, printJson } = require("../utils/csvWriter");

async function healthcheck(options) {
  try {
    const response = await axios.get(`${apiBaseUrl}/admin/healthcheck`);
    const data = response.data;

    if (options.format === "csv") {
      writeCsv(data, "healthcheck", [
        { id: "status", title: "status" },
        { id: "url", title: "Url of the Api" },
        { id: "key", title: "Key of the Api" },
      ]);
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
