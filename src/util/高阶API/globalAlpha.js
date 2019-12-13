export function globalAlpha(canvas, context) {
  // 设置全局透明度
  context.globalAlpha = 0.5;

  for (var i = 0; i <= 50; i++) {
    // 随机颜色取整
    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);

    context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";

    context.beginPath();
    // 标准弧线
    context.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, 0, Math.PI * .75, false);
    context.fill();
  }
}
