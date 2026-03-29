// let num = 1234;
// for (let index = 0; index < 4; index++) {
//   let final = 0;
//   let lastDigit = num % 10;
//   num = Math.floor(num / 10);
//   final = lastDigit;
//   console.log(final);
// }

// let a = 11;
// let b = 22;

// let c = a + b + a++ + b++ + ++a + ++b;
// console.log(c);

// let d = false;
// d++;
// console.log(d);

// console.log(Math.trunc(Math.random() * 3000) + 1000);

// let e = 45.52768;
// console.log(Number(e.toFixed(2)));

// let len = 24.2;
// let bre = 34.6;

// let area = len * bre;
// console.log(Number(area.toFixed(2)));

// let perimeter = 2 * (len + bre);
// console.log(Number(perimeter.toFixed(2)));

// let a = 5;
// let b = 9;
// let c = 2;

// let s = (a + b + c) / 2;
// console.log(s);

// console.log(Math.sqrt(s * (s - a) * Math.abs(s - b) * (s - c)));

// let ans = Number(prompt("What is your age"));
// while (isNaN(ans) || ans < 18) {
//   if (isNaN(ans)) {
//     console.log("Only Numbers Allowed");
//   } else {
//     console.log("You Cant Vote");
//   }
//   ans = Number(prompt("What is your age!!"));
// }
// if (ans >= 18) {
//   console.log("User can vote as his/her age is " + ans);
// }

// let amount = Number(prompt("Enter the Amount"));
// let discountRate;
// let Payable;
// while (isNaN(amount)) {
//   amount = Number(prompt("Enter Numbers Only!!"));
// }
// if (amount <= 5000) {
//   discountRate = 0;
// } else if (amount <= 7000) {
//   discountRate = 5;
// } else if (amount <= 9000) {
//   discountRate = 10;
// } else if (amount > 9000) {
//   discountRate = 20;
// } else {
//   console.log("Error Occured");
// }

// let discount = (amount * discountRate) / 100;
// Payable = amount - discount.toFixed(2);
// console.log("Amount PAYABLE is " + Payable);

// //   SLAB METHOD //
// let Bill = Number(prompt("Total Units!!"));
// let Payble;
// let amount = 0;
// while (isNaN(Bill)) {
//   Bill = Number(prompt("Enter Number Only!!"));
// }

// if (Bill > 400) {
//   amount = (Bill - 400) * 13;
//   Bill = 400;
// }
// if (Bill <= 400) {
//   amount += (Bill - 200) * 8;
//   Bill = 200;
// }
// if (Bill <= 200) {
//   amount += (Bill - 100) * 6;
//   Bill = 100;
// }
// if (Bill <= 100) {
//   amount += Bill * 4.2;
// }

// console.log(`Payable Amount ` + amount);

// let num = Number((0.1 + 0.2).toFixed(1));

// switch (num) {
//   case 0.3:
//     console.log("HELLO");
//     break;
//   case 0.4:
//     console.log("hello");
//     break;
//   default:
//     console.log("Invalid");
// }

// let num = prompt("Enter your Number");
// while (isNaN(num) || num === "") {
//   num = prompt("Enter a Number");
// }
// if (num === null) {
//   console.log("Loop stopped");
// } else {
//   let numb = Number(num);
//   let sum = 0;
//   for (let index = 1; index <= numb; index++) {
//     sum += index;
//   }
//   console.log(sum);
// }

// let num = prompt("Enter your Number");
// while (isNaN(num) || num === "") {
//   num = prompt("Enter a Number");
// }
// if (num === null) {
//   console.log("Loop stopped");
// } else {
//   let numb = Number(num);
//   for (let index = 1; index <= Math.floor(numb / 2); index++) {
//     if (numb % index === 0) {
//       console.log(`${index} is divisible by ${numb}`);
//     }
//   }
//   console.log(`${numb} is divisible by ${numb}`);
// }

// let numb = 100;
// let factors = [];

// for (let i = 1; i <= Math.sqrt(numb); i++) {
//   if (numb % i === 0) {
//     factors.push(i); // Add the small factor (e.g., 4)

//     if (i !== numb / i) {
//       factors.push(numb / i); // Add the large partner factor (e.g., 25)
//     }
//   }
// }

// console.log(
//   "All factors:",
//   factors.sort((a, b) => a - b),
// );

// let num = prompt("Enter your Number");
// while (isNaN(num) || num === "") {
//   num = prompt("Enter a Number");
// }
// if (num === null) {
//   console.log("Loop stopped");
// } else {
//   let numb = Number(num);
//   for (let index = 2; index <= Math.floor(Math.sqrt(numb)); index++) {
//     if (numb % index === 0) {
//       console.log(`${numb} is not Prime Number`);
//       break;
//     }
//     console.log(`${numb} is a Prime Number`);
//   }
// }

let num = prompt("Enter a Number!!");

while (isNaN(num) || num === "") {
  num = prompt("Enter a Number!!");
}
let numb = Number(num);
let sum = 0;
for (let index = num.length; index > 0; index--) {
  console.log(`Number ${num}`);
  sum += numb % 10;
  console.log(sum);
  numb = Math.floor(numb / 10);
}
console.log(`Last Sum ${sum}`);
