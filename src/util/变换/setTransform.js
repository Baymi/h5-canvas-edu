export function setTransform(context) {
  context.fillStyle="yellow";
  context.fillRect(200,100,250,100)

  context.setTransform(1,0.5,-0.5,1,30,10);
  context.fillStyle="red";
  context.fillRect(200,100,250,100);

  context.setTransform(1,0.5,-0.5,1,150,10);
  context.fillStyle="blue";
  context.fillRect(200,100,300,100);
}
