export function drawRec(context) {
  context.beginPath();
  context.moveTo(150, 50);
  context.lineTo(650, 50);
  context.lineTo(650, 550);
  context.lineTo(150, 550);
  // context.lineTo(150,50);     //绘制最后一笔使图像闭合
  context.closePath();           //使用closePath()闭合图形

  context.fillStyle = 'green';
  context.lineWidth = 50;
  context.strokeStyle = "black";

  context.fill();
  context.stroke();
}
