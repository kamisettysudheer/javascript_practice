// patterns...

// 1
// 22
// 333
// 4444

for (let i = 1; i < 5; i++) {
    let presentLine = "";

    for (let x = 0; x < i; x++) {
        presentLine = presentLine + i;
    }

    console.log(presentLine);
}

console.log();

// 1
// 12
// 123
// 1234

for (let i = 1; i < 5; i++) {
    let presentLine = "";

    for (let x = 1; x <= i; x++) {
        presentLine = presentLine + x;
    }

    console.log(presentLine);
}

console.log();

// *
// **
// ***
// ****

for (let i = 1; i < 5; i++) {
    let presentLine = "";

    for (let x = 0; x < i; x++) {
        presentLine = presentLine + "*";
    }

    console.log(presentLine);
}

console.log();

//    *
//   * *
//  * * *
// * * * *


let space = 3;

for (let i = 1; i < 5; i++) {
    let presentLine = "";

    for (let x = space; x > 0; x--) {
        presentLine = presentLine + " ";
    }

    for (let x = 0; x < i; x++) {
        presentLine = presentLine + "*" + " ";
    }
    space--;

    console.log(presentLine);
}

console.log();

// +-+-+
// -+-+-
// +-+-+

for (let y = 0; y < 8; y++) {
    let presentLine = "";

    for (let x = 0; x < 8; x++) {
        const toAdd = ((x + y) % 2 === 0) ? "+" : "-";
        presentLine = presentLine + toAdd;
    }

    console.log(presentLine);
}

