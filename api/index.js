const { response, request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const allLocation = require('../database/form')

// Set aplications;
app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use(cors());

// Creation database estatic;
let DB = {
    dados: [
        {id: 1, partida:0, destino:100, km40: 10, km60: 10, km80: 10, km100: 10},
        {id: 2, partida:0, destino:1450, km40: 10, km60: 10, km80: 10, km100: 10},
        {id: 3, partida:0, destino:160, km40: 10, km60: 10, km80: 10, km100: 10}
    ]
}

app.get('/api/dados', (request, response) => {
    response.send(DB.dados);
});

// Creation router for return ID;
app.get('/api/dado/:id', (request, response) => {
    const idUser = request.params.id
    if(isNaN(request.params.id)) {
        response.sendStatus(400);
        response.send('Ops!, esse ID informado não existe.');
    } else {
        const id = parseInt(idUser);
        const dado = DB.dados.find(index => index.id === id);
        if(dado !== undefined) {
            response.statusCode = 200;
            response.json(dado)
        } else {
            response.sendStatus(404);
        }
    }
});

app.delete('/api/dado/:id', (request, response) => {
    const idUser = request.params.id
    if(isNaN(request.params.id)) {
        response.sendStatus(400);
        response.send('Ops! Não foi possível deletar. Este item não existe');
    } else {
        const id = parseInt(idUser);
        const dado = DB.dados.findIndex(index => index.id === id);
        if (dado === -1) {
            // User enter id that does not exist;
            response.sendStatus = 404;
        } else {
            DB.dados.splice(dado, 1);
            response.sendStatus(200);
            response.json({ message: 'Removido com sucesso!' });
        }
    }
});

// Create item using method post;
app.post('/api/dado/', (request, response) => {
    const {partida, destino, km40, km60, km80, km100} = request.body;
    DB.dados.push({
        id: Math.floor(Math.random()* 10 + 1),
        partida,
        destino,
        km40,
        km60,
        km80,
        km100,
    });
    response.send({message: 'Item adicionado com sucesso!'});
});

// Save data the Data Base;
app.post('/api/dados/salvar', (request, response) => {
    const pt_partida = request.body.pt_partida;
    const pt_chegada = request.body.pt_chegada;

    allLocation.create({
        pt_partida: pt_partida,
        pt_chegada: pt_chegada
    }).then(() => {
        response.redirect('/api/dados/');
    }).catch((error) => {
        console.log(error);
    });
});

// Configuration Database;
const connection = require('../database/database');
connection
    .authenticate()
    .then(() => {
        console.log('MySQL: Connection Sucesses!');
    }).catch ((error) => {
        console.log(error);
    });

// Configuration server;
app.listen(9000, () => {
    console.log('Aplication runing in http://localhost:9000');
});
