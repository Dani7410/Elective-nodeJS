// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning
/*
const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
const Frank = {
    name: "Franke",
    age: 23
}
const Anna = {
    name: "Anna",
    age: 22
}
const Henrik = {
    name: "Henrik",
    age: 77
}

friends.push(Frank,Anna,Henrik,"frank","thomas","Daniel");

console.log(friends);


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const a = significantMathNumbers.indexOf(1729);
console.log(a);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
diet.splice(2,0,"hamburger","soda","pizza");
console.log(diet);



// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();

console.log(diet);

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
// the method unerneath is a no no 
const dinnerTray = [];
for (var i of diet){
    dinnerTray.push(i)
}
console.log(dinnerTray)
// this is a yes yes 
const dinnerTray1 = [...diet] // spread operator 

console.log(dinnerTray1)
//... - the spread operator - unpacks the element of an array 
// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
function myfunc(letter) {
    for(var i = 1; i < letter.length; i+=2){

        console.log(letter[i].charAt(0));
        //newLetterExpanded.push(i);
    }
    
}
myfunc(lettersExpanded);

*/
// this was a faulty try
/*
for(var i = 0; i < lettersExpanded.length; i+=2){

    console.log(newLetterExpanded)
    newLetterExpanded.push(i);
}
console.log(newLetterExpanded);
*/
//const ArrayTwo = lettersExpanded.filter()

/*
// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];


// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers
const discardedNumbers = [];

for(let i = 0; i <numbers.length; i++){
    if(numbers[i] > 6 || numbers[i] < 0){
    console.log(numbers[i]);
        }else{
            discardedNumbers.push(numbers[i]);
        }

}
console.log(discardedNumbers );
// --------------------------------------

*/

/*
const data = [
 {id:324, fname:"Daniel", lname:"Joketovic", mobile:3249824},
 {id:324, fname:"Daniel", lname:"Joketovic", mobile:3249824},
 {id:324, fname:"Daniel", lname:"Joketovic", mobile:3249824},
 {id:324, fname:"Daniel", lname:"Joketovic", mobile:3249824},
 {id:324, fname:"Daniel", lname:"Joketovic", mobile:3249824}
]   

const String =  

const newArray = data.split("},{")
console.log(newArray)
*/