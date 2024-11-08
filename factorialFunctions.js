/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
    let product = 1;

    for (let term = number; term > 1; term--) {
        product = product * term;
    }

    return product;
}

function getMarks(testStatus) {
    return testStatus ? "✅" : "❌";
}

function makeMessage(number, actual, expected) {
    console.log("\n" + mark + "factorial of '" + number + " is ' " + actual + "'");
}

function testFactorial(number, expected) {
    const actual = factorial(number);
    const testStatus = actual === expected;
    const mark = getMarks(testStatus);

    tableContent(mark, number, expected, actual);
}


function testCases() {
    makeRow(67);
    console.log("||  " + "testStatus" + "\t ||  " + "input" + "\t ||  " + "expected" + "\t ||  " + "actual" + "\t ||");
    makeRow(67);

    testFactorial(0, 1);
    testFactorial(1, 1);
    testFactorial(2, 2);
    testFactorial(3, 6);
    testFactorial(5, 120);
}

testCases();



function makeRow(lengthOfRow) {
    let line = "";

    for (let i = lengthOfRow; i > 0; i--) {
        line = line + "-";
    }

    console.log(line);
}

function makeColoumn(header) {
    console.log("||  " + header[0] + "\t ||  " + header[1] + "\t \t ||  " + header[2] + "\t ||  " + header[3] + "\t ||");
}

function tableInput(testStatus, input, expected, actual) {
    const lengthOfRow = 67;
    const header = [testStatus, input, expected, actual];

    makeColoumn(header);
    makeRow(lengthOfRow);
}

function tableContent(mark, number, expected, actual) {
    tableInput(mark, number, expected, actual);
}
