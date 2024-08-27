const Sequelize = require("sequelize");
const Connection = require("../database/database");

const Filme = Connection.define("filmes", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false      
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Filme.sync({force: true});

module.exports = Filme;