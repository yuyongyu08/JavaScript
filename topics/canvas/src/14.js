/**
 * setLineDash-线段与间隙的交替
 * lineDashOffset-起始偏移量
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([6, 4]);
  ctx.lineDashOffset = -offset;
  ctx.strokeStyle = 'red'
  ctx.strokeRect(200, 200, 200, 200);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 100);
}

march();