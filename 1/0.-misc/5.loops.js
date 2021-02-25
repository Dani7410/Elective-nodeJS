const oldArray = [1,2,3];
const newArray = [];
// preferred looping methods 

console.log(oldArray);

const fruits = ["apples", "banana", "blueberries"]; 

fruits.map( fruit => {
    console.log(fruit)
});

//without square brackets 
fruits.map( fruit =>console.log(fruit));


const copiedFruits = fruits.map( fruit =>fruit);
console.log(copiedFruits)


const copiedFruitsone = fruits.map((fruit, index) => {
     return { id: index+1, fruit, delicious: "yes yes yes"};
});

console.log(copiedFruitsone)