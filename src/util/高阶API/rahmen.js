import pkpk from '../../images/pkpk.jpg'

export function rahmen(context) {
  context.beginPath();
  context.moveTo(400, 260);
  context.bezierCurveTo(450, 220, 450, 300, 400, 315);
  context.bezierCurveTo(350, 300, 350, 220, 400, 260);
  context.clip();
  context.closePath();

  var img = new Image();
  img.src = pkpk;
  img.onload = function () {
    context.drawImage(img, 348, 240, 100, 100);
  }
}
