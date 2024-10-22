let rem = 0;
let rev = 0;
let num = 121;
let dup_num = 0;

dup_num = num;

 while(dup_num > 0) {
    rem = dup_num % 10;
    dup_num = dup_num - rem;
    rev = (rev * 10) + rem;
    dup_num = dup_num / 10;
 }

const isPalindrome = num === rev;

console.log("is this a palindrome?" , num , isPalindrome);
