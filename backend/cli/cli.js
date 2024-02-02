#!/usr/bin/env node
const { program } = require("commander");

program.version("1.0.0").description("CLI for ntuaflix");

program
  .command("name")
  .option("--nameid <nameid>", "Id of the person")
  .action((options) => {
    const { nameid } = options;

    if (!nameid) {
      console.error('Error: --nameid is required for the "name" command.');
      process.exit(1); // Exit with an error code
    }
  });

program.parse(process.argv);
