// Set dependencies in project;
const { response, request } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Config EJS view Express how template engine;
app.set('view engine', 'ejs');

// Decode the submission of data via the forms;
app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

// Create page home;
app.get('/home', (request, response) => {
    response.send('Funcionando...');
});

// Redirect for page home;


// Configuration server connection;
app.listen(9000, () => {
    console.log('Server is running in http://localhost:9000');
});
