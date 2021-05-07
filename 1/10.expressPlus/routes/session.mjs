import express from "express";

const router = express.Router();

router.get("/getsession", (req, res)=> {
    res.send({});
})

router.get("/setsession", (req, res) =>{
    res.send({hej});
})


export default router;