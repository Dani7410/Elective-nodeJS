const express = require("express");
const app = express();

app.use(express.json());



let plants = [

    {
        id: 1,
        name:"Drosophyllum"
    },
    {
        id: 2,
        name:"Cephalotus follicularis"

    },
    {
        id: 3,
        name:"Triphyophyllum peltatum"

    }
];

let id = plants.length;


app.get("/plants", (req, res) =>{
    res.send({ plants: plants });

});
// skal kigges på 
app.get("/plants/:id", (req, send) => {
    const plantId = Number(req.params.id);
    const plants = plants.find(p => p.id === plantId);
    res.send({Plants: allPlants})
});

app.post("/plants", (req, res) =>{
    const newPLant = req.body;
    newPLant.id = ++id;
    plants.push(newPLant);
    res.send({data: newPLant});
})

app.delete("/plants/:id", (req,res) =>{
    //get the id
    const id = Number(req.params.id);
    plants = plants.filter(plant => plant.id !== id);


    res.send({});
})

app.patch("/plants/:id", (req, res)=>{
    plants = plants.map(plants =>{
        let plantsUpdated = false;
        if(plants.id === Number(req.params.id)){
            plantsUpdated = true;
            return { ...plants, ...req.body, id: plants.id };
        }
        return plants;
    })
    res.send({data : plantsUpdated})
});


app.listen(7000, (error) => {
    if(error){
        console.log(error)
    }
    console.log('server running on 7000'); 
});