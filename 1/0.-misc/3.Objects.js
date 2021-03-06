// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};
 
//
const getMessage = myObj.message;
//const getMessage2 = Object.values(myObj['message']);

// Log the message 
console.log(getMessage);
console.log(myObj.message)
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const person = {"name": "Daniel", "age":26};
console.log(person);
// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

console.log(thisSong);

thisSong.about = "Just a tribe";

console.log(thisSong);
// --------------------------------------


