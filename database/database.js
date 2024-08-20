const Sequelize = require("sequelize");
const {user, password} = require("./dates");

const Connection = new Sequelize('filmes', user, password, {
    host: 'localhost',
    dialect: 'mysql'    
});

module.exports = Connection;