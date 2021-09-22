const { response, request } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false }));
app.use(express.json());

// Create page home;
app.get('/home', (request, response) => {
    response.send('Funcionando');
});

// Redirect for page home;


// Configuration server connection;
app.listen(9000, () => {
    console.log('Server is running in http://localhost:9000');
});
