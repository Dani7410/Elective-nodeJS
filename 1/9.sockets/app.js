const { Socket } = require("dgram");
const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);


io.on("connection", (socket) =>{
    console.log("a socket connected", socket.id);

    
    socket.on("colorSelected", (data) => {
        // change color of the current socket site
        socket.emit("changeColor", data);

        //change color of the current and all the other sockets
        //io.emit("changeColor", data);

        // change the color of all the sockets, but itself
        socket.broadcast.emit("changeColor", data);
    });
    
    socket.on("disconnect", () => {
        console.log("socket disconnected");
    });


})

//Note: namespaces - 



app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/colors.html");
})



server.listen(7070, (error) => {
    if(error){
        console.log(error);
    }
    console.log("server is running on port", 7070);
})