export function measureText(context) {
  //居中显示
  context.textAlign = "center";
  context.textBaseline = "middle";

  context.fillStyle = "#00AAAA";
  context.font="30px Arial";
  var txt="Hello Canvas";
  context.fillText("width:" + context.measureText(txt).width,400,300);
  context.fillText(txt,400,250);
}
