/**
 * createPattern-创建图案
*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 创建新 image 对象，用作图案
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function () {
    // 创建图案
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 1000, 1000);
}