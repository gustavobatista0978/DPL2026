const http = require('http');

const server = http.createServer((req, res) => {

    const urlParams = new URL(req.url, 'http://localhost:3000');
    const endpoint = urlParams.pathname;

    if (endpoint === '/nome') {

        const nome = urlParams.searchParams.get('nome') || 'visitante';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Olá, ${nome}!`);
    }

});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});