export function gradientRect(context) {
//添加渐变线
  var grd = context.createLinearGradient(100,300,700,300);

  //添加颜色断点
  grd.addColorStop(0,"olive");
  grd.addColorStop(0.25,"maroon");
  grd.addColorStop(0.5,"aqua");
  grd.addColorStop(0.75,"fuchsia");
  grd.addColorStop(0.25,"teal");

  //应用渐变
  context.fillStyle = grd;
  context.strokeStyle = grd;

  context.strokeRect(200,50,300,50);
  context.strokeRect(200,100,150,50);
  context.strokeRect(200,150,450,50);

  context.fillRect(200,300,300,50);
  context.fillRect(200,350,150,50);
  context.fillRect(200,400,450,50);

  context.fillRect(0,550,800,25);
}
