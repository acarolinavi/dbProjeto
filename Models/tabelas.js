const db = require('./bancoDados');
const familia = bancoDados.sequelize.define('familia', {
    nomeResponsavel: {
        type: db.Sequelize.STRING
    },
    cpfResponsavel: {
        type: db.Sequelize.STRING
    },
    quantidadeFamilia: {
        type: db.Sequelize.INT
    },
    idEndereco: {
        type: db.Sequelize.INT
    }

});

const condutor = db.sequelize.define('condutor', {
    nomeCondutor: {
        type: db.Sequelize.STRING
    },
    cpfCondutor: {
        type: db.Sequelize.INT
    },
    cnh: {
        type: db.Sequelize.INT
    },
    idEndereco: {
        type: db.Sequelize.INT
    }
});


const veiculo = db.sequelize.define('veiculo', {
    placa: {
        type: db.Sequelize.STRING
    },
    capacidade: {
        type: db.Sequelize.INT
    },
    modelo: {
        type: db.Sequelize.STRING
    },
    idCondutor: {
        type: db.Sequelize.INT
    }

});

const endereco = db.sequelize.define('endereco', {
    cep: {
        type: db.Sequelize.INT
    },
    logradouro: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.INT
    },
    complemento: {
        type: db.Sequelize.STRING
    }
    
    });

//  familia.sync({force: true});
//  condutor.sync({force: true});
//  veiculo.sync({force: true});
//  endereco.sync({force: true});

module.exports = {
    familia: familia,
    condutores: condutor,
    veiculo: veiculo,
    endereco: endereco
};
