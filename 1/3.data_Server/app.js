const express = require("express");
const app = express();

app.use(express.json());

const cat = require("./cat.json");

console.log(cat)

app.get("/cat", (req, res) => {

    res.send(cat)
});

//code
//to write the variable to the string input //querystring?key=thebestvalue
app.get("/querystring", (req,res) => {
    console.log(req.query);
    res.send({ query: req.query})
});

//http://localhost:8080/pathvariable/:something/:title22
app.get("/pathvariable/:message/:title", (req,res) => {
    res.send({
        message : req.params.message,
         title : req.params.title
        });
});

app.post("/whatever", (req,res) =>{
    console.log(req.body);
    res.send({ body : req.body});
});


// defines which port to run on 
app.listen(8000, (error) => {
    if(error){
        console.log(error)
    }
    console.log('server running on 3000'); 
});