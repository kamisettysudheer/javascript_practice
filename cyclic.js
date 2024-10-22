const userNumber = 10;
const range = 10;

let remainingDigits = userNumber;
let noOfDigits = 0;
let reverseOfNumber = 0;
let length = range;

while (remainingDigits > 0) {
    let remainder = remainingDigits % 10;
    reverseOfNumber = (reverseOfNumber * 10) + remainder;
    remainingDigits = (remainingDigits - remainder) / 10;
    noOfDigits++;
}

while (length > 0) {
    remainingDigits = reverseOfNumber;

    while (remainingDigits > 0) {
        let remainder = remainingDigits % 10;
        remainingDigits = (remainingDigits - remainder) / 10;
        
        if (length === 0) {
            break;
        }
        length--;
        console.log(remainder);
    }
}
