export function arcTwo(context) {
  context.shadowColor = "#545454";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 5;
  context.shadowBlur = 2;

  context.arc(400, 300, 200, 0, Math.PI * 2 ,true);
  context.arc(400, 300, 230, 0, Math.PI * 2 ,false);
  context.fillStyle = "#00AAAA";
  context.fill();
}
