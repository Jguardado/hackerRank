function centuryFromYear(year) {
    var yearString = year.toString();

    if(yearString.length === 1 || yearString.length === 2) {
      return 1
    }

    if (yearString.length === 3) {
        if(yearString[yearString.length - 1] < 1) {
            return Number(yearString[0])
          }
        return Number(yearString[0]) + 1
    }

    if(yearString.length === 4) {
      currentCentury = yearString[0] + yearString[1];
      var numVersion = Number(currentCentury);
      var currentYear = Number(yearString[2] + yearString[3])

      if (currentYear < 1) {
          return numVersion
      }
      return numVersion + 1;
    }
}

centuryFromYear(23)
