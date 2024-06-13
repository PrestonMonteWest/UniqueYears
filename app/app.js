#!/usr/bin/env node

const getUniqueDigitYears = require("../lib/unique-digit-years");

function processArgs() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    throw new Error("Start and end years are required");
  }

  if (args.length > 2) {
    throw new Error("Only provide start and end years");
  }

  const startYear = +args[0];
  const endYear = +args[1];

  if (
    !Number.isInteger(startYear) ||
    startYear < 0 ||
    !Number.isInteger(endYear) ||
    endYear < 0
  ) {
    throw new Error("Start and end years should be nonnegative integers");
  }

  if (startYear >= endYear) {
    throw new Error("Start year should come before end year");
  }

  return [startYear, endYear];
}

try {
  const [startYear, endYear] = processArgs();
  for (const year of getUniqueDigitYears(startYear, endYear)) {
    console.log(year);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exitCode = 1;
}
