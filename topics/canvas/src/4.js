/**
 * 圆形
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();

//脑袋
ctx.arc(500, 500, 500, 0, Math.PI * 2, true);

//鼻
ctx.moveTo(540, 500);
ctx.arc(500, 500, 40, 0, Math.PI * 2, false);

//口
ctx.moveTo(800, 600);
ctx.arc(500, 600, 300, 0, Math.PI, false);

//右眼
ctx.moveTo(350, 250);
ctx.arc(250, 250, 100, 0, Math.PI * 2, true);

//左眼
ctx.moveTo(850, 250);
ctx.arc(750, 250, 100, 0, Math.PI * 2, true);

//通过线条画轮廓
ctx.stroke();

/**
 * moveTo()是下笔点，不是圆心！
 * 
*/