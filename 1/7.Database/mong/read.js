const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbname = "movies";

MongoClient.connect(url, {useUnifiedTopology: true}, (error, client) =>{
    if(error){
        throw error;
    }

    const db = client.db(dbname);
    const actors = db.collection("movies");

    actors.find().toArray((error, data) => {
        console.log(data)
        client.close();
    })

});
