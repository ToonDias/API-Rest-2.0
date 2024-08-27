const express = require("express");
const bodyParser = require("body-parser");
const filmesController = require("./filmes/filmescontroller");

const app = express();



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(filmesController);

app.get("/admin/filmes", (req, res) => {
    res.send("Filmes!");
});

app.get("/admin/filme/:id", (req, res) => {
    var id = req.params.id;
    res.send("Filme de ID: " + id);
});

app.post("/admin/filme", (req, res) => {
    res.send("Novo filme salvo!");
});

app.delete("/admin/filme/:id", (req, res) => {
    res.send("Filme deletado!");
});


app.listen(8081, (error) => {
    if(error){
        console.log("Erro: ", error.message);
    }else{
        console.log("Aplicação rondando na URL http://localhost:8081");
    }
})