export function rotate2(context) {
  for (var i = 0; i <= 10; i++) {
    context.save();
    /*context.translate(400, 300);
    context.rotate(10 * i * Math.PI / 180);
    context.fillStyle = "rgba(255,0,0,0.25)";
    context.fillRect(0, -200, 200, 200);*/

    context.translate(500, 200);
    context.rotate(10 * i * Math.PI / 180);
    context.fillStyle = "rgba(255,0,0,.1)";
    context.fillRect(0, -100, 200, 500);
    context.restore();
  }
}
