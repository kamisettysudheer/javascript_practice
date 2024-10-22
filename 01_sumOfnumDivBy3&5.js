// sum of the numbers which are divisible by 3 or 5 upto 10..
// 3 + 5 + 6 + 9 + 10...

const sumUpto = 1000;
let sumOfFactorsOf3or5 = 0; 
let factor = 0;

while (sumUpto > sumOfFactorsOf3or5) {
    if ((sumUpto % 3 === 0) || (sumUpto % 5 === 0)) {
        sumOfFactorsOf3or5 = sumOfFactorsOf3or5 + factor;
    }
    factor++;
}

console.log(sumOfFactorsOf3or5);


