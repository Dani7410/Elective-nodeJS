// why we need asynchronous code
//when we need it 

//promises

//two states
// -- pending 
// -- fulfilled 
    //resolved(good) or rejected(bad)

/*
new Promise((resolve, reject) => {
    setTimeout(() =>{
        //resolve(" everything went well");
        reject("something went wrong")
    }, 4000)
}).then(message =>{
    console.log(message)
}).catch(errorMessage =>{
    console.log(errorMessage);
});


new Promise((resolve, reject) => {
    resolve("happy days are starting ")
    reject("bad days")
}).then(goodMessage =>{
    console.log(goodMessage);
}).catch(badMessage =>{
    console.log(badMessage);
})
*/

//wrapping a function with a promise
// make a function that has a promise and deal with it by calling the function
function myPomiseFunction(){
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve("everything went well");
            }, 3000);
        } catch {
            reject("everything didnt go as planned");
        }
    });
}
// and then add the "then" and "catch" - handling the resolve and reject.
/*
myPomiseFunction()
    .then(message => console.log(message))
    .catch(message => console.log(message));
*/


    // async/await - tactical sugar of promises
async function asynccall(){
    const message = await myPomiseFunction();
    console.log(message);
}   

asynccall();



/*
setTimeout(() => {
    console.log("time has passed")
}, 4000);
// after it resolves ... then ......

setInterval(() =>{
    console.log("another time has passed")
}, 4000);
*/