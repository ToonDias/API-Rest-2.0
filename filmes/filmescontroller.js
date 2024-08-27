const express = require("express");
const router = express.Router();
const Filme = require("./Filme");

router.get("/filmes", (req, res) => {
    
    Filme.findAll().then( filmes => {
        res.statusCode(200);
        res.json(filmes);
    });
});

router.get("/filme/:id", (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.statusCode(404);
    }else{
        Filme.findByPk(id).then( filme => {
            res.statusCode(200);
            res.json(filme);
        });
    }
});

router.post("/filme", (req, res) => {
    var {titulo, genero, descricao} = req.body;
    
    Filme.create({titulo, genero, descricao}).then( ()=> {
        res.statusCode(200);      
    });
});

router.delete("/filme/id", (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.statusCode(400);
    }else{
        Filme.destroy({where: {id}}).then( () => {
            res.status(200);
        });
    }
});



module.exports = router;