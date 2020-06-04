/**
 * strokeStyle-轮廓颜色
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let index = 10;
for (var i = 0; i < index; i++) {
    for (var j = 0; j < index; j++) {
        ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 65.5 * i)}, ${Math.floor(255 - 32.5 * j)}`;
        ctx.beginPath();
        let marginX = 50, marginY= 50, radius = 30;
        ctx.arc(marginX + i * 100, marginY + j * 100, radius, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}