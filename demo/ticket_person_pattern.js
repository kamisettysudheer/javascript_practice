// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;

// // for 10
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
// 2, 4, 5, 6, 7, 8, 9, 10;
// 4, 6, 7, 8, 9, 10;
// 6, 8, 9, 10;
// 8, 10;
// 10;

// // for 9
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
// 2, 4, 5, 6, 7, 8, 9, 10;
// 4, 6, 7, 8, 9, 10;
// 6, 8, 9, 10;
// 8, 10;

const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let index = 0;
while (arr.length !== 0 && arr[arr.length - 1] !== undefined) {
  const firstNum = arr.shift();
  const secondNum = arr.shift();
  const thirdNum = arr.shift();
  arr.unshift(secondNum);
  index++;
  // console.log(arr);
  // console.log(firstNum, thirdNum, index);
  // console.log(secondNum, index);
  // console.log(firstNum, index);
}

// for (let i = 0; i )

// const num = Number(prompt("enter number"));
// if (num % 2 !== 0) {
//   console.log(Math.floor(num / 2));
// } else {
//   console.log(num / 2 + 1);
// }
