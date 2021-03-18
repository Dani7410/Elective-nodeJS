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

app.listen(PORT, error =>{
    if(error){
        console.log(error)
    }
    console.log('Server running on', Number(PORT));
})