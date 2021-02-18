const express = require("express");
//const app = require("express")(); 
const app = express();  
//console.log(express())


//sends a request(needs to be json format)
app.get("/", (req,res) => {
    res.send({});
});

//creates a request response that take a h1 tag with a value and sends it 
app.get("/welcome",(req, res) => {
    res.send("<h1>welcome</h1>")
});


app.get("/me",(req, res) => {
    res.send({
        Name: "Daniel",
        Age: "26435352", 
    })
});


app.listen(8080)// defines which port to run on 