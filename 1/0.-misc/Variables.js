// use strict
totalglobalVariable = 123;

var mypreciousRing = "0";

let VarA;
let VarB;

console.log(VarA+VarB);// dont ever do it this way. If you want to see what it is, use commas. 
console.log(VarA, VarB);

console.log('hello there', "yo")
console.table(['hello there', "yo"])

//what is a scope? its a block. Its all presented by the variable type.
//if you put {this inside is a scopefield} its inside the file.

// a nested scope:
{
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable)//
    }
    console.log(scopedVariable); //when the first log is not declared this will print 123, becasue it has acces to the first "scopedvariable"
    // but iwhtout the first log it will print "abc"
}
//console.log(scopedVariable);// cant reach because the scope is inside the nest.

// stick to let and const, and dont use var too often
//const = makes the variable unchangeable 
// let = does something 

for(let i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i)
    },1000);
}