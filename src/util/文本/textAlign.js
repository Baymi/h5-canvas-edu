export function textAlign(context) {
  // 在位置 400 创建蓝线
  context.strokeStyle="blue";
  context.moveTo(400,100);
  context.lineTo(400,500);
  context.stroke();


  context.fillStyle = "#000";
  context.font="50px Arial";

  // 显示不同的 textAlign 值
  context.textAlign="start";
  context.fillText("textAlign=start", 400, 120);
  context.textAlign="end";
  context.fillText("textAlign=end", 400, 200);
  context.textAlign="left";
  context.fillText("textAlign=left", 400, 280);
  context.textAlign="center";
  context.fillText("textAlign=center", 400, 360);
  context.textAlign="right";
  context.fillText("textAlign=right", 400, 480);
}
