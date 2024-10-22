const format = 'mm-dd-yyyy';
const date = '05-08-2008';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let year = "";
let month = "";
let day = "";
let whichFormat = 0;

if (format === 'yyyy-mm-dd' && date.length === 10) {
    year = +(date[0] + date[1] + date[2] + date[3]);
    month = +(date[5] + date[6]);
    day = +(date[8] + date[9]);
    whichFormat = 1;
}

if (format === 'mm-dd-yyyy' && date.length === 10) {
    year = +(date[6] + date[7] + date[8] + date[9]);
    month = +(date[0] + date[1]);
    day = +(date[3] + date[4]);
    whichFormat = 2;
}

if (format === 'dd-mm-yyyy' && date.length === 10) {
    year = +(date[6] + date[7] + date[8] + date[9]);
    month = +(date[3] + date[4]);
    day = +(date[0] + date[1]);
    whichFormat = 3;
}

const isYearValid = year >= 1 && year <= 9999;
const isMonthValid = month >= 1 && month <= 12;
const isDayValid = day >= 1 && day <= 31;

const isMonthHas30Days = (month === 4) || (month === 6) || (month === 9) || (month === 11);
const isMonthIsFeb = month === 2;
const isLeapYear = (year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0));

let isValidDate = isYearValid && isMonthValid && isDayValid;

if (isLeapYear && isMonthIsFeb) {
    isValidDate = day < 30 && day > 0;
}

if (!isLeapYear && isMonthIsFeb) {
    isValidDate = day < 29 && day > 0;
}

if (isMonthHas30Days) {
    isValidDate = day < 31 && day > 0;
}

if (whichFormat === 0 || !date.length) {
    isValidDate = false;
}

const dateIsValidated = isValidDate ? "valid" : "invalid";

console.log(dateIsValidated);
