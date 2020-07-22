var ctx = document.getElementById('canvas').getContext('2d');
var raf;
var running = false;

var ball = {
    x: 100,
    y: 100,
    vx: 50,
    vy: 20,
    radius: 25,
    color: 'blue',
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
    }
    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('click', function (e) {
    running = !running;

    if (running) {
        raf = window.requestAnimationFrame(draw);
    }else{
        window.cancelAnimationFrame(raf)
    }
});



ball.draw();

