// Create a function called myfirst function that returns greetings result 
// functions return undefined 
function myFirstFunction(){
    var s = 'hello';
    return s
}
console.log(myFirstFunction())



const myVariable = function(){
console.log("hello from daniel");
};

myVariable();
//arrow function. Binds it to the scope of the function 
const myArrowFunction = () => {
    console.log("helloe there from the anonymous function which is also an arrwo function");
};
myArrowFunction();


//callback are functions within functions. or a functions that is passed as a argument to be executed as a function 
function sayHiLater(anyFunctionReference){
    //simulate code running
    //take some time...
    //and mor time...
    anyFunctionReference();
}

const sayHi = () =>{
    console.log('hi')
}

sayHiLater(sayHi);

const sayHello = () =>{
    console.log('hello');
}

sayHiLater(sayHello);


//interact should call a poke function and the poke function should say "poke" + name
function interact(genericInteraction,name){
    console.log(genericInteraction(name));
}

const poke = (name) =>{
    return "poke" + name;
}

interact(poke,"daniel");

interact(hug = (name) =>{ return "hug" + name}, "daniel");

interact((name) => "hug" + name,"Napster");
