/**
 * globalAlpha-设置透明度
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 画背景
let width = heght = 500;
ctx.fillStyle = '#FD0';
ctx.fillRect(0, 0, width, heght);
ctx.fillStyle = '#6C0';
ctx.fillRect(width, 0, width, heght);
ctx.fillStyle = '#09F';
ctx.fillRect(0, heght, width, heght);
ctx.fillStyle = '#F30';
ctx.fillRect(width, heght, width, heght);
ctx.fillStyle = '#FFF';

// 设置透明度值
ctx.globalAlpha = 0.2;

for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(width, heght, 50 + 50 * i, 0, Math.PI * 2, true);
    ctx.fill()
}