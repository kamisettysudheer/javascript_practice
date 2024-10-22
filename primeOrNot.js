// check whether prime or not 
// in this program 1 is also a prime

const numberToCheckPrimeOrNot = 5;
let factorOrNot = 1;
let factors = 0;

while (numberToCheckPrimeOrNot > factorOrNot) {
    if (numberToCheckPrimeOrNot % factorOrNot === 0) {
        factors++;
    }
    factorOrNot++;
}

let isPrime = factors < 2;

console.log("check this number is prime or not" , numberToCheckPrimeOrNot , isPrime);
