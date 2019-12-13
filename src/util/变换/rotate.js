export function rotate(context) {
  for(var i = 0; i <= 2; i++){
    context.save();
    context.translate(70 + i * 50, 50 + i * 40);
    context.fillStyle = "#00AAAA";
    context.fillRect(0,0,20,20);
    context.restore();

    context.save();
    context.translate(70 + i * 50, 50 + i * 40);
    context.rotate(i * 30 * Math.PI / 180);
    context.fillStyle = "red";
    context.fillRect(0,0,20,20);
    context.restore();
  }
}
