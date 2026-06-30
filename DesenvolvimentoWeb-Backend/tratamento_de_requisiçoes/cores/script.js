const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const urlParams = new URL(req.url, 'http://localhost:3000');
    const endpoint = urlParams.pathname;

    if (endpoint === '/cor') {

        const cor = urlParams.searchParams.get('cor');

        let arquivo = '';

        if (cor === 'red') {
            arquivo = 'red.html';
        }
        else if (cor === 'green') {
            arquivo = 'green.html';
        }
        else if (cor === 'blue') {
            arquivo = 'blue.html';
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Cor invalida');
            return;
        }

        fs.readFile(arquivo, (erro, dados) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(dados);
        });

    }

});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});