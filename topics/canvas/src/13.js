/**
 * lineStyle-线条样式
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



//lineWidth
for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    let x = 5 + i * 20
    ctx.moveTo(x, 5);
    ctx.lineTo(x, 200);
    ctx.stroke();
}

//lineCap-线段端点
var lineCap = ['butt', 'round', 'square']
ctx.strokeStyle = 'black';
for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(250 + i * 50, 10);
    ctx.lineTo(250 + i * 50, 140);
    ctx.stroke();
}

//lineJoin-线段连接样式
var lineJoin = ['round', 'bevel', 'miter'];
ctx.lineWidth = 10;
for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    let x = 450
    let y = 10 + i * 40
    ctx.moveTo(x , y);
    ctx.lineTo(x + 50 * 1, y + 40);
    ctx.lineTo(x + 50 * 2, y);
    ctx.lineTo(x + 50 * 3, y + 40);
    ctx.lineTo(x + 50 * 4, y);
    ctx.stroke();
}