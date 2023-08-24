function* getUniqueDigitYears(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    let yearStr = `${year}`;
    let duplicateFound = false;

    for (let index = 0; index < yearStr.length - 1; index++) {
      const digit = yearStr.charAt(index);

      if (yearStr.slice(index + 1).includes(digit)) {
        duplicateFound = true;
        break;
      }
    }

    if (!duplicateFound) {
      yield year;
    }
  }
}

module.exports = getUniqueDigitYears;
