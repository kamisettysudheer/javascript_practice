const format = 'mm-dd-yyyy';
const date = '05-08-20060';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

if (format === 'yyyy-mm-dd' && date.length === 10) {
    let Year = date[0] + date[1] + date[2] + date[3];
    let Month = date[5] + date[6];
    let Date = date[8] + date[9];

    const isYearValid = +Year >= 1 && +Year <= 9999;
    const isMonthValid = +Month >= 1 && +Month <= 12;
    const isDateValid = +Date >= 1 && +Date <= 31;

    const isMonthHas30Days = +Month === 4 || +Month === 6 || +Month === 9 || +Month === 11;
    const isMonthIsFeb = +Month === 2;
    const isLeapYear = Year % 400 === 0 || Year % 100 !== 0 && Year % 4 === 0; 

    const isLeapAndFeb = isLeapYear && isMonthIsFeb;

    const generalisedDate = isYearValid && isMonthValid && isDateValid ? "valid" : "invalid";

    if (isLeapAndFeb) {
        const isValidDate = +Date < 30 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);
    }

    if (!isLeapYear && isMonthIsFeb) {
        const isValidDate = +Date < 29 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);
    }

    if (isMonthHas30Days) {
        const isValidDate = +Date < 31 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);   
    }

    else {
        console.log(generalisedDate);
    }
}

if (format === 'mm-dd-yyyy' && date.length === 10) {
    let Year = date[6] + date[7] + date[8] + date[9];
    let Month = date[0] + date[1];
    let Date = date[3] + date[4];

    const isYearValid = +Year >= 1 && +Year <= 9999;
    const isMonthValid = +Month >= 1 && +Month <= 12;
    const isDateValid = +Date >= 1 && +Date <= 31;

    const isMonthHas30Days = +Month === 4 || +Month === 6 || +Month === 9 || +Month === 11;
    const isMonthIsFeb = +Month === 2;
    const isLeapYear = Year % 400 === 0 || Year % 100 !== 0 && Year % 4 === 0; 

    const isLeapAndFeb = isLeapYear && isMonthIsFeb;

    const generalisedDate = isYearValid && isMonthValid && isDateValid ? "valid" : "invalid";

    if (isLeapAndFeb) {
        const isValidDate = +Date < 30 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);
    }

    if (!isLeapYear && isMonthIsFeb) {
        const isValidDate = +Date < 29 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);
    }

    if (isMonthHas30Days) {
        const isValidDate = +Date < 31 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);   
    }

    else {
        console.log(generalisedDate);
    }
}

if (format === 'dd-mm-yyyy' && date.length === 10) {
    let Year = date[6] + date[7] + date[8] + date[9];
    let Month = date[3] + date[4];
    let Date = date[0] + date[1];

    const isYearValid = +Year >= 1 && +Year <= 9999;
    const isMonthValid = +Month >= 1 && +Month <= 12;
    const isDateValid = +Date >= 1 && +Date <= 31;

    const isMonthHas30Days = +Month === 4 || +Month === 6 || +Month === 9 || +Month === 11;
    const isMonthIsFeb = +Month === 2;
    const isLeapYear = Year % 400 === 0 || Year % 100 !== 0 && Year % 4 === 0; 

    const isLeapAndFeb = isLeapYear && isMonthIsFeb;

    const generalisedDate = isYearValid && isMonthValid && isDateValid ? "valid" : "invalid";

    if (isLeapAndFeb) {
        const isValidDate = +Date < 30 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);
    }

    if (!isLeapYear && isMonthIsFeb) {
        const isValidDate = +Date < 29 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);
    }

    if (isMonthHas30Days) {
        const isValidDate = +Date < 31 && +Date > 0 ? "valid" : "invalid";
        console.log(isValidDate);   
    }

    else {
        console.log(generalisedDate);
    }
}

const isFormatCorrect = (format !== "yyyy-mm-dd" && format !== "mm-dd-yyyy" && format !== "dd-mm-yyyy");
const isDateLengthCorrect = date.length === 10;

if (isFormatCorrect || !isDateLengthCorrect) {
    console.log("invalid");
}
