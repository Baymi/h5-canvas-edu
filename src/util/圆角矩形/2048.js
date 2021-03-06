export function draw2048(context) {
  drawRoundRect(context, 200, 100, 400, 400, 5);
  context.fillStyle = "#AA7B41";
  context.strokeStyle = "#0078AA";
  context.stroke();
  context.fill();

  for(var i = 1; i <= 4; i++){
    for(var j = 1; j <= 4; j++){
      drawRoundRect(context, 200 + 16 * i + 80 * (i - 1), 100 + 16 * j + 80 * (j - 1), 80, 80, 5);
      context.fillStyle = "#CCBFB4";
      context.strokeStyle = "#0078AA";
      context.stroke();
      context.fill();
    }
  }
}

function drawRoundRect(cxt, x, y, width, height, radius){
  cxt.beginPath();
  cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
  cxt.lineTo(width - radius + x, y);
  cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
  cxt.lineTo(width + x, height + y - radius);
  cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
  cxt.lineTo(radius + x, height +y);
  cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
  cxt.closePath();
}
