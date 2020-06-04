/**
 * 矩形框
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(25, 25, 50, 50); //画矩形
ctx.clearRect(35, 35, 30, 30); //清除矩形
ctx.strokeRect(40, 40, 20, 20) //画矩形框