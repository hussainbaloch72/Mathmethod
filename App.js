// Chapter 26 (Rounding Numbers)
// Q1
// function roundToNearestInteger(number) {
//   return Math.round(number);
// }
// const originalNumber = 4.9;
// const roundedNumber = roundToNearestInteger(originalNumber);
// console.log(`The rounded number is: ${roundedNumber}`);

// Q2
// const origNum = 4.9;
// const roundNum = Math.ceil(origNum);
// console.log(`The rounded-up number is: ${roundNum}`);

// Q3
// const origNum = 4.9;
// const roundNum = Math.floor(origNum);
// console.log(`The rounded-down number is: ${roundNum}`);

// Q4
// const origNum = 4.9;
// const roundNum = Math.floor(origNum);
// console.log(`The rounded number is: ${roundNum}`);

// Q5
// const originalNumber = 0.5;
// const roundedNumber = Math.floor(originalNumber);
// console.log(`The rounded number is: ${roundedNumber}`);


// Chapter 27 (Random Numbers)
// Q1
// function getRandomNumber(min, max) { 
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   const randomNum = getRandomNumber(1, 50);
//   console.log(`Random number between 1 and 50: ${randomNum}`);
  
// Q2
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   const randomNum = getRandomNumber(1, 50);
//   console.log(`Random number between 1 and 50: ${randomNum}`);

// Q3
// function rollDice() {
//     const randomRoll = Math.floor(Math.random() * 6) + 1;
//     return randomRoll;
//   }
//   const diceResult = rollDice();
//   console.log(`You rolled a ${diceResult}`);
  

// Q4
// function coinToss() {
//     const randomValue = Math.random();
//     const result = randomValue < 0.5 ? 'Heads' : 'Tails';
//     return result;
//   }
//   const tossResult = coinToss();
//   console.log(`You got: ${tossResult}`);
  

// Chapter 28, 29 (Converting Strings)
// Q1
// let numStr = "100";
// let numValue = +numStr;
// console.log("Type before conversion:", typeof numStr); // string
// console.log("Type after conversion:", typeof numValue); // number

// Q2
// let str = "123";
// let intValue = parseInt(str);

// console.log("Type before conversion:", typeof str); // string
// console.log("Type after conversion:", typeof intValue); // number
// console.log("Converted value:", intValue); // 123

// Q3
// var stringNumber = "3.14";
// var floatNumber = parseFloat(stringNumber);
// console.log(floatNumber); // Output: 3.14


// Q4
// function isConvertibleToNumber(str) {
//     return !isNaN(str);
//   }
  
//   console.log(isConvertibleToNumber("123")); // true
//   console.log(isConvertibleToNumber("3.14")); // true
//   console.log(isConvertibleToNumber("hello")); // false
  
// Q5
// var number = 42;
// var stringNumber = "" + number;
// console.log(stringNumber); // Output: "42"

// Q6
// function numberToString() {
//     var number = 42;
//     var stringNumber = number.toString();
//     return stringNumber;
// }

// console.log(numberToString()); // Output: "42"

// Q7
// let decimalStr = "3.14";
// let numValue = +decimalStr;
// console.log("Converted value:", numValue); // 3.14


// Chapter 30 (Controlling the length of decimals)
// Q1
// const num = 123.456789; 
// const roundedNum = num.toFixed(4);
// const newNum = roundedNum.toString(); 
// console.log("Original number:", num);
// console.log("Rounded and converted number:", newNum);

// Q2
// var number = 3.14159;
// number = parseFloat(number.toFixed(2));

// Q3
// if (num.toFixed(2).toString().length > 4) {
//   } else {
//   }

// Q4
// var originalNumber = 123.456789;
// var roundedString = originalNumber.toFixed(2);
// alert(roundedString);
