export function radRect(context) {
  drawRoundRect(context, 200, 100, 400, 400, 50);
  context.strokeStyle = "#0078AA";
  context.stroke();
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
