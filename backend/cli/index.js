#!/usr/bin/env node

const { program } = require("commander");
const setupHealthcheckCommand = require("./src/commands/healthcheck");
const setupTitleCommand = require("./src/commands/title");
const setupSearchTitleCommand = require("./src/commands/searchtitle");
const setupByGenreCommand = require("./src/commands/bygenre");
const setupNameCommand = require("./src/commands/name");
const setupSearchNameCommand = require("./src/commands/searchname");

// Set CLI metadata
program
  .version("1.0.0")
  .description(
    "CLI for ntuaflix, providing various data retrieval and manipulation functionalities."
  );

// Initialize commands
setupHealthcheckCommand(program);
setupTitleCommand(program);
setupSearchTitleCommand(program);
setupByGenreCommand(program);
setupNameCommand(program);
setupSearchNameCommand(program);

// Parse the command line arguments
program.parse(process.argv);

// If no arguments are provided, display help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
