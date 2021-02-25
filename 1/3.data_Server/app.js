const express = require("express");
const app = express();

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


app.listen(8080)// defines which port to run on 