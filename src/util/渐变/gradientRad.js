export function gradientRad(context) {
  //添加渐变线
  var grd = context.createRadialGradient(400,300,50,400,300,200);

  //添加颜色断点
  grd.addColorStop(0,"olive");
  grd.addColorStop(0.25,"maroon");
  grd.addColorStop(0.5,"aqua");
  grd.addColorStop(0.75,"fuchsia");
  grd.addColorStop(0.6,"teal");

  //应用渐变
  context.fillStyle = grd;

  context.fillRect(100,100,600,400);
}
