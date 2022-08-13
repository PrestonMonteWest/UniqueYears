#!/usr/bin/env node

try {
    const [startYear, endYear] = processArgs();
    console.log(getUniqueDigitYears(startYear, endYear).join(', '));
} catch (err) {
    console.error(`Error: ${err.message}`);
    process.exitCode = 1;
}

// helpers
function processArgs() {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        throw new Error('Start and end years are required.');
    }

    if (args.length > 2) {
        throw new Error('Only provide start and end years.');
    }

    const startYear = +args[0];
    const endYear = +args[1];

    if (
        !Number.isInteger(startYear) ||
        startYear < 0 ||
        !Number.isInteger(endYear) ||
        endYear < 0
    ) {
        throw new Error('Start and end years should be nonnegative integers.');
    }

    if (startYear >= endYear) {
        throw new Error('Start year should come before end year.');
    }

    return [startYear, endYear];
}

function getUniqueDigitYears(startYear, endYear) {
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
        let yearStr = `${year}`;
        let duplicateFound = false;

        while (yearStr.length - 1) {
            const digit = yearStr.charAt(0);
            yearStr = yearStr.slice(1);

            if (yearStr.includes(digit)) {
                duplicateFound = true;
                break;
            }
        }

        if (!duplicateFound) {
            years.push(year);
        }
    }

    return years;
}
