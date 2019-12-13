export function clip(context) {
  //在屏幕上绘制一个大方块
  context.fillStyle = "black";
  context.fillRect(10,10,200,200);
  context.save();
  context.beginPath();

  //裁剪画布从(0，0)点至(50，50)的正方形
  context.rect(0,0,80,80);
  context.clip();

  //红色圆
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.arc(100,100,100,0,Math.PI * 2,false);
  //整圆
  context.stroke();
  context.closePath();

  context.restore();

  //再次裁切整个画布
  context.beginPath();
  context.rect(0,0,500,500);
  context.clip();

  //绘制一个没有裁切的蓝线
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.arc(100,100,50,0,Math.PI * 2,false);
  //整圆
  context.stroke();
  context.closePath();
}
