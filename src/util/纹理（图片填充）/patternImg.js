import zhamen from '../../images/zhamen.png';

export function getPattern(context) {
  /*let img = new Image();
  img.src = zhamen;
  let pattern = context.createPattern(img, 'repeat');
  context.fillStyle = pattern;*/

  let img = new Image();
  img.src = zhamen;
  img.onload = function(){
    let pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0,0,200,300);
  }
}
