export function transform1(context) {
  context.fillStyle = "yellow";
  context.strokeStyle = "#00AAAA";
  context.lineWidth = 5;

  context.save();
  //平移至(300,200)
  context.transform(1,0,0,1,300,200);
  //水平方向放大2倍，垂直方向放大1.5倍
  context.transform(2,0,0,1.5,0,0);
  //水平方向向右倾斜宽度10%的距离，垂直方向向上倾斜高度10%的距离
  context.transform(1,-0.1,0.1,1,0,0);
  context.fillRect(0,0,200,200);
  context.strokeRect(0,0,200,200);
  context.restore();
}
