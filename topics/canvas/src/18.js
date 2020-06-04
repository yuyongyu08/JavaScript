/**
 * createPattern-创建图案
*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 2;
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

ctx.font = "20px Times New Roman";
ctx.fillStyle = "Black";
ctx.fillText("Sample String", 5, 30);