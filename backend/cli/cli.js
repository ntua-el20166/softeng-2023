#!/usr/bin/env node
const { program } = require("commander");
const axios = require("axios");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const path = require("path");
const { title } = require("process");

const apiBaseUrl = "http://localhost:9876/ntuaflix_api";
const outputDirectory = path.join(__dirname, "output"); // Specify the output directory

// Ensure the output directory exists, create it if not
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

program.version("1.0.0").description("CLI for ntuaflix");

program
  .command("title")
  .requiredOption("--titleID <titleID>", "Id of the movie")
  .option(
    "--format <format>",
    "Specify the output format (json or csv)",
    "json"
  )
  .action(async (options) => {
    try {
      const { titleID, format } = options;
      const response = await axios.get(`${apiBaseUrl}/title/${titleID}`);
      const titleObject = response.data;

      if (format === "json") {
        console.log(JSON.stringify(titleObject, null, 2));
      } else if (format === "csv") {
        const csvFilePath = path.join(outputDirectory, "title.csv");

        const csvWriter = createCsvWriter({
          path: csvFilePath,
          header: [
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
          ],
        });

        // Write data to CSV file
        await csvWriter.writeRecords([titleObject]);
        console.log("CSV file generated successfully.");
      } else {
        console.error('Invalid format. Use "json" or "csv".');
      }
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1); // Exit with an error code
    }
  });

program
  .command("searchtitle")
  .requiredOption("--titlepart <titlepart>", "Part of Movie title")
  .option(
    "--format <format>",
    "Specify the output format (json or csv)",
    "json"
  )
  .action(async (options) => {
    try {
      const { titlepart, format } = options;
      const data = {
        titlePart: titlepart,
      };
      const response = await axios.post(`${apiBaseUrl}/searchtitle`, data);
      const titleObjects = response.data;

      if (format === "json") {
        console.log(JSON.stringify(titleObjects, null, 2));
      } else if (format === "csv") {
        const csvFilePath = path.join(outputDirectory, "titlepart.csv");

        const csvWriter = createCsvWriter({
          path: csvFilePath,
          header: [
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
          ],
        });

        // Write data to CSV file
        await csvWriter.writeRecords([titleObjects]);
        console.log("CSV file generated successfully.");
      } else {
        console.error('Invalid format. Use "json" or "csv".');
      }
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1); // Exit with an error code
    }
  });

program
  .command("bygenre")
  .requiredOption("--genre <genre>", "genre of Movie")
  .requiredOption("--min <min>", "min rating of Movie")
  .option("--from <from>", "from year")
  .option("--to <to>", "to year")
  .option(
    "--format <format>",
    "Specify the output format (json or csv)",
    "json"
  )
  .action(async (options) => {
    try {
      const { genre, min, from, to, format } = options;
      const data = {
        qgenre: genre,
        minrating: min,
        yrFrom: from,
        yrTo: to,
      };
      const response = await axios.post(`${apiBaseUrl}/bygenre`, data);
      const titleObjects = response.data;

      if (format === "json") {
        console.log(JSON.stringify(titleObjects, null, 2));
      } else if (format === "csv") {
        const csvFilePath = path.join(outputDirectory, "titlepart.csv");

        const csvWriter = createCsvWriter({
          path: csvFilePath,
          header: [
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
          ],
        });

        // Write data to CSV file
        await csvWriter.writeRecords([titleObjects]);
        console.log("CSV file generated successfully.");
      } else {
        console.error('Invalid format. Use "json" or "csv".');
      }
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1); // Exit with an error code
    }
  });

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

program
  .command("searchname")
  .requiredOption("--name <name>", "Name of Person")
  .option(
    "--format <format>",
    "Specify the output format (json or csv)",
    "json"
  )
  .action(async (options) => {
    try {
      const { name, format } = options;
      const response = await axios.get(`${apiBaseUrl}/searchname/${name}`);
      const nameObjects = response.data;

      if (format === "json") {
        console.log(JSON.stringify(nameObjects, null, 2));
      } else if (format === "csv") {
        const csvFilePath = path.join(outputDirectory, "searchname.csv");

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
        await csvWriter.writeRecords([nameObjects]);
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
