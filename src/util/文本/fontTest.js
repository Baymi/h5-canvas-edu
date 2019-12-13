export function fontTest(context) {
  //1. 使用`font`设置字体。
  context.font = "50px serif";
  //2. 使用`fillStyle`设置字体颜色。
  context.fillStyle = "#00AAAA";
  //3. 使用`fillText()`方法显示字体。
  context.fillText("《CANVAS--Draw on the Web》",50,300);

}
