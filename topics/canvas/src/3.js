/**
 * 三角形
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(75, 25);
ctx.lineTo(50, 70)
ctx.fill();