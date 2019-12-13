export function lineJoin(context) {
  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(300,300);
  context.lineTo(100,500);
  context.lineJoin = "miter";
  context.lineWidth = 50;
  context.strokeStyle = "red";
  context.stroke();

  context.beginPath();
  context.moveTo(300,100);
  context.lineTo(500,300);
  context.lineTo(300,500);
  context.lineJoin = "bevel";
  context.lineWidth = 50;
  context.strokeStyle = "blue";
  context.stroke();

  context.beginPath();
  context.moveTo(500,100);
  context.lineTo(700,300);
  context.lineTo(500,500);
  context.lineJoin = "round";
  context.lineWidth = 50;
  context.strokeStyle = "black";
  context.stroke();
}
