export function scale(context) {
  context.strokeStyle = "red";
  context.lineWidth = 5;
  for(var i = 1; i < 4; i++){
    context.save();
    context.scale(i,i);
    context.strokeRect(50,50,150,100);
    context.restore();
  }
}
