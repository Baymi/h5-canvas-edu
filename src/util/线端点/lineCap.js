export function lineCap(context) {
  context.lineWidth = 50;
  context.strokeStyle = "#1BAAAA";

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(700, 100);
  context.lineCap = "butt";
  context.stroke();

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(700, 300);
  context.lineCap = "round";
  context.stroke();

  context.beginPath();
  context.moveTo(100, 500);
  context.lineTo(700, 500);
  context.lineCap = "square";
  context.stroke();

  //下面画两个基准线方便观察
  context.lineWidth = 3;
  context.strokeStyle = "black";

  context.beginPath();
  context.moveTo(100, 0);
  context.lineTo(100, 600);
  context.moveTo(700, 0);
  context.lineTo(700, 600);
  context.stroke();
}
