export function drawArcTo(cxt, x0, y0, x1, y1, x2, y2, r) {
  cxt.beginPath();
  cxt.moveTo(x0, y0);
  cxt.arcTo(x1, y1, x2, y2, r);

  cxt.lineWidth = 6;
  cxt.strokeStyle = "red";
  cxt.stroke();

  cxt.beginPath();
  cxt.moveTo(x0, y0);
  cxt.lineTo(x1, y1);
  cxt.lineTo(x2, y2);

  cxt.lineWidth = 1;
  cxt.strokeStyle = "#0088AA";
  cxt.stroke();

}
