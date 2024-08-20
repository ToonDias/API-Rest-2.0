const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());





app.listen(8081, (error) => {
    if(error){
        console.log("Erro: ", error.message);
    }else{
        console.log("Aplicação rondando na URL http://localhost:8081");
    }
})