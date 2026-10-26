var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var x = 0; 
var y = 200; 
var tamanhoQuadrado = 200;

var velocidadeX = 2; 
var velocidadeY = 2; 

var cliques = 0;



function funcao(){
    cliques++;
    velocidadeX = 0;
    velocidadeY = 0;
    verificarClique();
}

function verificarClique() {
    if (cliques === 2){
        velocidadeX = 2;
        velocidadeY = 2;
        cliques = 0;
    }
}
function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'rgba(0, 255, 0, 0.5)';
    c.fillRect(x, y, tamanhoQuadrado, tamanhoQuadrado);

    x = x + velocidadeX;
    if (x + tamanhoQuadrado > canvas.width || x < 0) {
        velocidadeX = -velocidadeX; 
    }

    y = y + velocidadeY;
    if (y + tamanhoQuadrado > canvas.height || y < 0) {
        velocidadeY = -velocidadeY;
    }
}

animate();