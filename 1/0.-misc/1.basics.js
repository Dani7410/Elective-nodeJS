// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

//concatenation
console.log("my first name is "+firstName +" and my last name is "+lastName);

//literal
console.log('my firstname is ${firstName} and my last name is ${lastName}')

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2
var yearTwo = parseInt(year) + number;
console.log(yearTwo);

const currentyear = Number(year) + number;
console.log(currentyear);

console.log(Number("123abc"));
console.log(parseInt("123abc123"));

console.log(+ currentyear);


// --------------------------------------
