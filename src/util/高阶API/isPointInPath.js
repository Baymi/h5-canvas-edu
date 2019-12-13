let balls = [];

export function isPointInPathFn(canvas, context) {
  // 此处获取点位
  for (let i = 0; i < 50; i++) {
    let aBall = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 50 + 20
    };
    balls[i] = aBall;
  }
  // 随机画并填色
  draw(context);
  canvas.addEventListener("mousemove", detect.bind(this, canvas, context));
}

function draw(context) {
  for (var i = 0; i < balls.length; i++) {
    context.beginPath();
    context.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2);
    context.globalAlpha = 0.5;

    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);

    context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
    context.fill();

  }
}

function detect(canvas, context, event) {
  // getBoundingClientRect()返回元素的大小及其相对于视口的位置
  // console.log(canvas.getBoundingClientRect().left, canvas.getBoundingClientRect().top)
  var x = event.clientX - canvas.getBoundingClientRect().left;
  var y = event.clientY - canvas.getBoundingClientRect().top;

  for (var i = 0; i < balls.length; i++) {
    context.beginPath();
    context.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2);

    if (context.isPointInPath(x, y)) {
      context.fillStyle = "rgba(255,255,255,0.01)";
      context.fill();
    }
  }
}
