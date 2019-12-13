export function drawLine(context) {
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(300, 300);
  context.lineTo(100, 500);
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.stroke();

  context.beginPath();
  context.moveTo(300, 100);
  context.lineTo(500, 300);
  context.lineTo(300, 500);
  context.lineWidth = 5;
  context.strokeStyle = "blue";
  context.stroke();

  context.beginPath();
  context.moveTo(500, 100);
  context.lineTo(700, 300);
  context.lineTo(500, 500);
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.stroke();
}
