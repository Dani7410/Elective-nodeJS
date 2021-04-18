const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static('public'))

console.log(__dirname)
//code
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/welcome/welcome.html");
}); 


app.get("/dragon", (req,res)=> {
res.sendFile(__dirname + "/public/dragons/dragons.html")
});

app.get("/crypto", (req, res) =>{
    res.sendFile(__dirname + "/public/crypto/crypto.html" );
});

app.get("/safeport", (req , res) =>{
    res.send({message: "you are safe here"})
});

app.get("/dangerport", (req, res) =>{
res.redirect("/safeport");
});


app.get("/potato", (req, res) =>{
    console.log(req.query);
    // need to return so that line 25 does no execute another response for the same request
    if(req.query.value === "spud"){
        return res.send({type: "petite potato"});
    }
    return res.send({lifephil: "my life is potato and i am a potato"});
});







//const PORT = process.env.PORT ? process.env.PORT : 8080
//skal kigges på
const PORT = process.env.PORT || 8080;
console.log(PORT);
//npm run start-dev giver den rigtige forbindelse. 

const server = app.listen(PORT, error =>{
    console.log("this will run second")
    if(error){
        console.log(error);
    }
    console.log('Server running on', server.address().port);
});
//callbacks are for when we are waiting for a response
//because we dont know when we will get the response we will continue until the response is ready
//everything that takes time we want to use callbacks for having out system still run and not cause blocking. 
// we use asynchournous behavior to not have the program stall and crash 
console.log(server.address())
console.log("this will run first")


//function callback(())