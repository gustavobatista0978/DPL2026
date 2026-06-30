const http = require('http');

const servidor = http.createServer((req, res) => {
    if (req.url.startsWith('/identificar')) {
        const partesUrl = req.url.split('?');
        const queryString = partesUrl[1];

        let nomeDoUsuario = '';

        if (queryString) {
            const parametros = queryString.split('=');
            
            if (parametros[0] === 'nome') {
                nomeDoUsuario = decodeURIComponent(parametros[1]);
            }
        }

        if (nomeDoUsuario) {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(`Nome recebido: ${nomeDoUsuario}`);
        } else {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Por favor, informe o nome na URL. Exemplo: /identificar?nome=SeuNome');
        }
    } 
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada. Acesse /identificar?nome=SeuNome');
    }
});

const porta = 3000;

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});