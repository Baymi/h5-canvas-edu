export function globalCompositeOperation(canvas, context) {
  context.globalCompositeOperation = "source-out";
  context.globalAlpha = 0.8;

  for (var i = 0; i <= 10; i++) {
    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);

    context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";

    context.beginPath();
    context.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, 0, Math.PI * 2);
    context.fill();
  }
}
