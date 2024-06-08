const Sequelize = require('sequelize');
const sequelize = new Sequelize('aquasys', 'root', 'inserirSenha', {
    host:"localhost",
    dialect: 'mysql'
});


sequelize.authenticate()
.then(function(){
    console.log("Conectado")})
.catch(function(){
    console.log("Não conectado")
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}