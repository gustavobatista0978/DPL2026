var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function randomVelocity() {
    return (Math.random() - 0.5) * 4;
}

function Quadrado(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.dX = randomVelocity();
    this.dY = randomVelocity();
}

Quadrado.prototype.desenhar = function () {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.size, this.size);
};

Quadrado.prototype.movimentar = function () {
    if (this.x <= 0 || this.x + this.size >= canvas.width) this.dX *= -1;
    if (this.y <= 0 || this.y + this.size >= canvas.height) this.dY *= -1;
    this.x += this.dX;
    this.y += this.dY;
    this.desenhar();
};

function Linha(x1, y1, x2, y2, color) {
    this.x = x1;
    this.y = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.dX = randomVelocity();
    this.dY = randomVelocity();
    this.dX2 = randomVelocity();
    this.dY2 = randomVelocity();
}

Linha.prototype.desenhar = function () {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x2, this.y2);
    c.strokeStyle = this.color;
    c.stroke();
};

Linha.prototype.movimentar = function () {
    if (this.x <= 0 || this.x >= canvas.width) this.dX *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.dY *= -1;
    if (this.x2 <= 0 || this.x2 >= canvas.width) this.dX2 *= -1;
    if (this.y2 <= 0 || this.y2 >= canvas.height) this.dY2 *= -1;
    this.x += this.dX;
    this.y += this.dY;
    this.x2 += this.dX2;
    this.y2 += this.dY2;
    this.desenhar();
};

function Circulo(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dX = randomVelocity();
    this.dY = randomVelocity();
}

Circulo.prototype.desenhar = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
};

Circulo.prototype.movimentar = function () {
    if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) this.dX *= -1;
    if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) this.dY *= -1;
    this.x += this.dX;
    this.y += this.dY;
    this.desenhar();
};

var quadradosVetor = [];
var linhasVetor = [];
var circulosVetor = [];

for (var i = 0; i < 10; i++) {
    var x = Math.random() * (canvas.width - 100);
    var y = Math.random() * (canvas.height - 100);
    quadradosVetor.push(new Quadrado(x, y, 100, randomColor()));
}

for (var i = 0; i < 10; i++) {
    var x_inicio = Math.random() * canvas.width;
    var y_inicio = Math.random() * canvas.height;
    var x_fim = Math.random() * canvas.width;
    var y_fim = Math.random() * canvas.height;
    linhasVetor.push(new Linha(x_inicio, y_inicio, x_fim, y_fim, randomColor()));
}

for (var i = 0; i < 30; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var circulo_aleatorio = Math.random() * 50 + 5;
    circulosVetor.push(new Circulo(x, y, circulo_aleatorio, randomColor()));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (var b = 0; b < quadradosVetor.length; b++) {
        quadradosVetor[b].movimentar();
    }
    for (var b = 0; b < linhasVetor.length; b++) {
        linhasVetor[b].movimentar();
    }
    for (var b = 0; b < circulosVetor.length; b++) {
        circulosVetor[b].movimentar();
    }
}

animate();