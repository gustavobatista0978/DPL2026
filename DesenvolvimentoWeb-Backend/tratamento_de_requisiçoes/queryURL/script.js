const http = require('http');

const server = http.createServer((req, res) => {

    const urlParams = new URL(req.url, 'http://localhost:3000');
    const endpoint = urlParams.pathname;

    if (endpoint === '/nome') {

        const nome = urlParams.searchParams.get('nome') || 'visitante';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Ola, ${nome}!`);

    } else if (endpoint === '/idade') {

        const nome = urlParams.searchParams.get('nome') || 'visitante';
        const idade = Number(urlParams.searchParams.get('idade'));

        let tipo;

        if (idade >= 18) {
            tipo = 'maior';
        } else {
            tipo = 'menor';
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Ola ${nome}, voce e ${tipo} de idade.`);

    } else if (endpoint === '/email') {

        const email = urlParams.searchParams.get('email');

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        if (email === 'admin@etefmc.com.br') {
            res.end('Login realizado com sucesso!');
        } else {
            res.end('Email invalido!');
        }

    } else {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint nao encontrado');

    }

});

server.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000/');
});