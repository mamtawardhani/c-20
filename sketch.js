var moving, fixed

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 80, 40);
  moving=createSprite(500,200,40,80);

  moving.shapeColor="green"
  fixed.shapeColor="green"

  moving.debug=true
  fixed.debug=true

}

function draw() {
  background("black");  
  console.log(moving.x-fixed.x)

  if(moving.x-fixed.x<moving.width/2+fixed.width/2
     && fixed.x-moving.x<moving.width/2+fixed.width/2){
    moving.shapeColor="red"
    fixed.shapeColor="red"
  }

  else{
    moving.shapeColor="green"
  fixed.shapeColor="green"
  }

  moving.x=mouseX
  moving.y=mouseY
  drawSprites();
}