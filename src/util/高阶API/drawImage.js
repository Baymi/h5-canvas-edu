import pkpk from '../../images/pkpk.jpg'

export function drawImage(context) {
  var img = new Image();
  img.src = pkpk;
  img.onload = function () {
    // 三参数
    // context.drawImage(img,200,50);
    // 五参数
    // context.drawImage(img, 200, 50, 200, 100);
    // 九参数
    context.drawImage(img, 250, 100, 50, 50, 200, 50, 100, 100);
  }
}

