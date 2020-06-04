/**
 * 画线
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//三角形-填充
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(800, 100);
ctx.lineTo(100, 800);
ctx.fill();

//三角形-描边
ctx.beginPath();
ctx.moveTo(900, 900);
ctx.lineTo(200, 900);
ctx.lineTo(900, 200);
ctx.closePath(); //闭合
ctx.stroke();