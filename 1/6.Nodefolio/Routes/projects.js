const router = require("express").Router();

const projects = [   
    {
        title: "Nodefolio",
        description: "Daniels Projects",
        gitURL: "https://github.com/Dani7410/Elective-nodeJS/tree/main/1",
        images: [],
        tecknologiesInvolved: ["Node.js", "HTML", "CSS"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
}