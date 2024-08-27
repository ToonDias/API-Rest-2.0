const Sequelize = require("sequelize");
const Connection = require("../database/database");

const Filme = Connection.define("filmes", {
    titulo: {
        typeof: Sequelize.STRING,
        allowerNull: false
    },
    genero: {
        typeof: Sequelize.STRING,
        allowerNull: false      
    },
    descricao: {
        tuppeof: Sequelize.TEXT,
        allowerNull: false
    }
});

//Filme.sync({force: true});

module.exports = Filme;