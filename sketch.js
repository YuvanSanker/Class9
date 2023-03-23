var box
function setup() {
  createCanvas(400,400);
  box=createSprite(220,200,20,50)
}

function draw() 
{
  
  if (keyDown(RIGHT_ARROW)) {
    background("red")
  }
  if (keyIsDown(LEFT_ARROW)) {
    background("blue")
  }
drawSprites()
}




