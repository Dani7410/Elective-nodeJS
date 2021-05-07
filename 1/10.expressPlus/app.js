// we are importing and exporting through module system
//const express = require("express");
import express from "express";
const app = express();

//to give security *new way*
import helmet from "helmet";
// *the old way* const helmet = require("helmet");
app.use(helmet());

//import {goodValue as betterName} from "./test.mjs";
//console.log(betterName);

import passwordUtil from "./util/password.mjs"

import testFile from "./test.mjs";

console.log(testFile);


//middleware 

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

  /*
  create a sessions and set the router with express sessions
  */

  import sessionRouter from "./routes/session.mjs";
  app.use(sessionRouter);


//rate limiter decides the amout of try you have to get a page. After amount it will block your get page and set a timeer for thwn you can try again
import rateLimiter from "express-rate-limit";
const authlimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });

const basicLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
  });

  app.use(basicLimiter); // this hits all the routes
  app.use("auth/*",authlimiter);

  app.get("/auth/login", (req,res, next) =>{
        res.send({message: "login ...."})
  })

const ipLogger = (req, res, next) =>{
    console.log(req.ip);
    next();
}



app.use(ipLogger);



app.get("/", (req,res, next) => {
    //res.send('<h2>Hello and welcome to this blank page</h2>')'
    console.log("this hits me first");
    next();
});

app.get("/", (req,res) => {
    res.send('<h2>then hits this</h2>')
});



app.get("/house/door", (req,res) => {
    res.send('<h2>door added to house</h2>')
});

app.get("/house", (req,res) => {
    res.send('<h2>A new feature is added</h2>')
});

app.get("/*", (req,res) => {
    res.status(404).send('<h2>Sorry the page is unavailable</h2>')
});

app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("server is running on port", 8080);
})