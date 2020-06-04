const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw(i) {
    let colors = ['red', 'yellow', 'blue']

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    let r = i * 2
    let x = 475 + getRandom(20), y = canvas.height - i * 20;
    ctx.arc(x, y, r, 0, Math.PI * 2, true);

    ctx.fillStyle = 'red' || colors[getRandom(colors.length)];
    ctx.fill()
}

function getRandom(scope) {
    return Math.floor(Math.random() * scope)
}

var i = 0;

function pop() {
    if (i > 50) {
        i = 0
    }
    draw(++i)
    setTimeout(pop, 100)
}

pop()
