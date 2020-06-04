/**
 * fillStyle-填充颜色
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let index = 10;
for (var i = 0; i < index; i++) {
    for (var j = 0; j < index; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
            Math.floor(255 - 42.5 * j) + ',0)';
        ctx.fillRect(j * 100, i * 100, 100, 100);
    }
}