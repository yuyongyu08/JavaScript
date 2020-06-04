const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.translate(500, 500);

let total = 29

ctx.save();
for (var j = 0; j < total; j++) { // draw individual dots
    ctx.fillStyle = 'rgb(' + (10 * j) + ',' + (255 - 10 * j) + ',255)';

    ctx.rotate(Math.PI * 2 / total);
    ctx.beginPath();

    let x = 0 , y = 400
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.font = "20px serif";
    ctx.fillText('于永雨', x ,y);
}
ctx.restore();

ctx.font = "40px serif";
ctx.fillText('于永雨', -10 ,-10);

