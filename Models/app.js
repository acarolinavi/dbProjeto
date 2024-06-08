const tabelas = require('./Models/Post');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/add',function(req,res){
    familia.create({
        nomeResponsavel: req.body.nomeResponsavel,
        cpfResponsavel: req.body.cpfResponsavel,
        quantidadeFamilia: req.body.quantidadeFamilia
       
    }).then(function(){
        res.send(" Cadastro realizado")
    }).catch(function(erro){
        res.send("Houve um erro " + erro)
    })
    endereco.create({})
    condutor.create({})
    veiculo.create({})
})