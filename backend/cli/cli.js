#!/usr/bin/env node
const { program } = require("commander");
const axios = require("axios");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const path = require("path");

const apiBaseUrl = "http://localhost:9876/ntuaflix_api";
const outputDirectory = path.join(__dirname, "output"); // Specify the output directory

// Ensure the output directory exists, create it if not
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

program.version("1.0.0").description("CLI for ntuaflix");

program
  .command("name")
  .requiredOption("--nameid <nameid>", "Id of the person")
  .option(
    "--format <format>",
    "Specify the output format (json or csv)",
    "json"
  ) // Default is json
  .action(async (options) => {
    try {
      const { nameid, format } = options;
      const response = await axios.get(`${apiBaseUrl}/name/${nameid}`);
      const nameObject = response.data;

      if (format === "json") {
        console.log(JSON.stringify(nameObject, null, 2));
      } else if (format === "csv") {
        const csvFilePath = path.join(outputDirectory, "name.csv");

        const csvWriter = createCsvWriter({
          path: csvFilePath,
          header: [
            { id: "nameID", title: "Name ID" },
            { id: "name", title: "Name" },
            { id: "namePoster", title: "Name Poster" },
            { id: "birthYr", title: "Birth Year" },
            { id: "deathYr", title: "Death Year" },
            { id: "profession", title: "Profession" },
            { id: "nameTitles", title: "Name Titles" },
          ],
        });

        // Write data to CSV file
        await csvWriter.writeRecords([nameObject]);
        console.log("CSV file generated successfully.");
      } else {
        console.error('Invalid format. Use "json" or "csv".');
      }
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1); // Exit with an error code
    }
  });

program.parse(process.argv);
