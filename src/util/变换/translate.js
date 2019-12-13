/*平移变换*/
export function translate(context) {
  context.fillStyle = "#00AAAA";
  context.fillRect(100,100,200,100);

  context.save();
  context.fillStyle = "red";
  // 状态在前，绘制在后
  context.translate(100,100);
  context.fillRect(100,100,200,100);
  context.restore();

  // 此时如果未添加状态保存，则坐标系变化为新状态，故移动200单位不参照原始单位
  // 所以请添加save
  context.save();
  context.fillStyle = "green";
  context.translate(200,200);
  context.fillRect(100,100,200,100);
  context.restore();
}
