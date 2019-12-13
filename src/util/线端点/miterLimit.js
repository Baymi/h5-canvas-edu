export function miterLimit(context) {
  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(300,300);
  context.lineTo(100,500);
  context.lineJoin = "miter";
  context.miterLimit = 100;
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.stroke();

  context.beginPath();
  context.moveTo(300,200);
  context.lineTo(500,300);
  context.lineTo(300,400);
  context.lineJoin = "miter";
  context.miterLimit = 10;
  context.lineWidth = 5;
  context.strokeStyle = "blue";
  context.stroke();

  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(700,300);
  context.lineTo(500,310);
  context.lineJoin = "miter";
  context.miterLimit = 10;
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.stroke();
}
