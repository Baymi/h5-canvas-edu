import tuff from '../../images/tuff.jpg';
export function fontRender(context) {
  context.beginPath();
  context.font = "50px Verdana";
  let gradient = context.createLinearGradient(0,0,400,0);
  gradient.addColorStop("0","magenta");
  gradient.addColorStop("0.5","blue");
  gradient.addColorStop("1.0","yellow");
  context.fillStyle = gradient;
  context.strokeStyle = "#00AAAA";
  context.strokeText("hello my world!", 50, 100);
  context.fillText("hello my world!", 50, 200);

  //限制宽度
  context.fillText("hello my world!", 50, 300, 200);

  context.beginPath();
  let img = new Image();
  img.src = tuff;
  img.onload = function(){
    let pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.fillText("hello my world!", 50, 400);
  }

  context.beginPath();
  context.fillStyle = "#00AAAA";
  context.fillText("hello my world!", 50, 500);
}
