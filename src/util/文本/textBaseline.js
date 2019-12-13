export function textBaseline(context) {
  //在位置 y=300 绘制蓝色线条
  context.strokeStyle="blue";
  context.moveTo(0,300);
  context.lineTo(800,300);
  context.stroke();

  context.fillStyle = "#00AAAA";
  context.font="20px Arial";

  //在 y=300 以不同的 textBaseline 值放置每个单词
  context.textBaseline="top";
  context.fillText("Top",150,300);
  context.textBaseline="bottom";
  context.fillText("Bottom",250,300);
  context.textBaseline="middle";
  context.fillText("Middle",350,300);
  context.textBaseline="alphabetic";
  context.fillText("Alphabetic",450,300);
  context.textBaseline="hanging";
  context.fillText("Hanging",550,300);
}
