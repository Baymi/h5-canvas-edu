export function drawCurve2(context) {
  context.beginPath();
  context.lineWidth = 20;
  context.strokeStyle = "#333";
  context.moveTo(60, 300);
  context.quadraticCurveTo(500, 43, 60, 500);
  context.stroke();

  context.beginPath();
  context.lineWidth = 10;
  context.moveTo(300, 300);
  context.quadraticCurveTo(500, 43, 60, 500);
  context.stroke();

  context.beginPath();
  context.lineWidth = 20;
  context.moveTo(500, 500);
  context.quadraticCurveTo(500, 43, 60, 500);
  context.stroke();
}
