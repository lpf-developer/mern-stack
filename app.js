const express = require('express');
const rotas = require('./src/routes/user.route');

const app = express();

app.use('/', rotas);

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});
