
function makeRow(lengthOfRow) {
    let line = "";

    for (let i = lengthOfRow; i > 0; i--) {
        line = line + "-";
    }

    console.log(line);
}

function makeColoumn(header) {
    let headers = "";

    for (let index = 0; index < header.length; index++) {
        headers = headers + header[index] + "\t ||";
    }
    
    console.log(headers);
}

function tableInput(testStatus, input, expected, actual) {
    const lengthOfRow = 67;
    const header = [testStatus, input, expected, actual];

    makeColoumn(header);    
    makeRow(lengthOfRow);
}

function tableContent() {
    makeRow(67);
    
    tableInput("testStatus", "input", "expected", "actual");
    tableInput(true, 1, true, true);
    tableInput(true, 1, true, true);
    tableInput(true, 1, true, true);
    tableInput(true, 1, true, true);
}

tableContent();
