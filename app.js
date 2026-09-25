const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Olá! Estou fazendo um curso da AWS. Agora vou testar minha pipeline.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
