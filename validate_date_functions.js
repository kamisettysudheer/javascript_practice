function isValidFormat(format) {
  if (format === "dd-mm-yyyy") {
    return 1;
  }

  if (format === "mm-dd-yyyy") {
    return 2;
  }

  if (format === "yyyy-mm-dd") {
    return 3;
  }

  return 0;
}

function isNumberInRange(number, lowLimit, highLimit) {
  return number > lowLimit && number < highLimit;
}

function getDay(date, formatNumber) {
  switch (formatNumber) {
    case 1:
      return +(date[0] + date[1]);
    case 2:
      return +(date[3] + date[4]);
    case 3:
      return +(date[8] + date[9]);
  }
}

function getMonth(date, formatCode) {
  switch (formatCode) {
    case 1:
      return +(date[3] + date[4]);
    case 2:
      return +(date[0] + date[1]);
    case 3:
      return +(date[5] + date[6]);
  }
}

function getYear(date, formatCode) {
  if (formatCode === 1 || formatCode === 2) {
    return +(date[6] + date[7] + date[8] + date[9]);
  }

  return +(date[0] + date[1] + date[2] + date[3]);
}

function isFormatMatched(formatCode, date, day, month, year) {
  if (formatCode === 1) {
    const isCorretDay = +(date[0] + date[1]) === day;
    const isCorretMonth = +(date[3] + date[4]) === month;
    const isCorretYear = +(date[6] + date[7] + date[8] + date[9]) === year;
    const isCorrectHyphen = date[2] + date[5] === "--";

    return isCorretDay && isCorretMonth && isCorretYear && isCorrectHyphen;
  }

  if (formatCode === 2) {
    const isCorretMonth = +(date[0] + date[1]) === month;
    const isCorretDay = +(date[3] + date[4]) === day;
    const isCorretYear = +(date[6] + date[7] + date[8] + date[9]) === year;
    const isCorrectHyphen = date[2] + date[5] === "--";

    return isCorretDay && isCorretMonth && isCorretYear && isCorrectHyphen;

  }

  if (formatCode === 3) {
    const isCorretDay = +(date[8] + date[9]) === day;
    const isCorretMonth = +(date[5] + date[6]) === month;
    const isCorretYear = +(date[0] + date[1] + date[2] + date[3]) === year;
    const isCorrectHyphen = date[4] + date[7] === "--";

    return isCorretDay && isCorretMonth && isCorretYear && isCorrectHyphen;
  }

  return true;
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  return isDivisible(year, 100) ? isDivisible(year, 400) : isDivisible(year, 4);
}

function getDaysOfTheMonth(month, year) {
  if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
    return 31;
  }

  if (month === 2) {
    return isLeapYear(year) ? 30 : 29;
  }

  return 32;
}

function isValidDate(year, month, day) {
  return isNumberInRange(day, 0, getDaysOfTheMonth(month, year));
}

function validate(format, date) {
  const formatCode = isValidFormat(format);

  if (formatCode === 0) {
    return "invalid format";
  }

  const year = getYear(date, formatCode);
  const month = getMonth(date, formatCode);
  const day = getDay(date, formatCode);

  const isFormatCorrect = isFormatMatched(formatCode, date, day, month, year);
  const isYearValid = isNumberInRange(year, 0, 10000);
  const isMonthValid = isNumberInRange(month, 0, 13);
  const isDayValid = isValidDate(year, month, day);

  if (!isFormatCorrect || date.length !== 10) {
    return "date not according to format";
  }

  if (!isYearValid) {
    return "invalid year";
  }

  if (!isMonthValid) {
    return "invalid month";
  }

  if (!isDayValid) {
    return "invalid day";
  }

  return "valid";
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-60-0001', 'invalid day');
  testValidate('mm-dd-yyyy', '21-60-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('yyyy-mm-dd', '01-21-2020', 'date not according to format');
  testValidate('dd-mm-yyyy', '0*-01-2020', 'date not according to format');
  testValidate('dd-mm-yyyy', '02- 1-2020', 'date not according to format');
}

testAll();
