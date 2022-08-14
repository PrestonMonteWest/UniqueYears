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

module.exports = getUniqueDigitYears;
