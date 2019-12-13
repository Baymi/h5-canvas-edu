// 镂空效果
export function drawPath(context) {
  context.beginPath();
  context.rect(200,100,400,400);
  // 绘制矩形
  drawPathRect(context, 250, 150, 300, 150);
  // 绘制三角
  drawPathTriangle(context, 345, 350, 420, 450, 270, 450);
  context.arc(500, 400, 50, 0, Math.PI * 2, true);
  context.closePath();

  context.fillStyle = "#058";
  context.shadowColor = "gray";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.fill();
}

//逆时针绘制矩形
function drawPathRect(cxt, x, y, w, h){
  /**
   * 这里不能使用beginPath和closePath，
   * 不然就不属于子路径而是另一个全新的路径，
   * 无法使用非零环绕原则
   */
  cxt.moveTo(x, y);
  cxt.lineTo(x, y + h);
  cxt.lineTo(x + w, y + h);
  cxt.lineTo(x + w, y);
  cxt.lineTo(x, y);

}

//逆时针绘制三角形 / 345 350 / 420 450 / 270 450
function drawPathTriangle(cxt, x1, y1, x2, y2, x3, y3){
  cxt.moveTo(x1,y1);
  cxt.lineTo(x3,y3);
  cxt.lineTo(x2,y2);
  cxt.lineTo(x1,y1);
}
