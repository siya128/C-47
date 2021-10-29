var player
var playerAnimation = []
var playerSpriteData,playerSpriteSheet
var i
var Img, bground
var x1 = 0; 
var x2
var scrollSpeed = 10
function preload(){
  playerSpriteData = loadJSON("Assets/Animations-Preview.json")
  
  bground = loadImage("Assets/Bground.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  
}


function draw() {
  background("white")
    image(bground, x1, 0, width, height); 
  image(bground, x2, 0, width, height);
   x1-=scrollSpeed; x2-=scrollSpeed;
    if(x1<= -width/2 + 100){ x1 = width; } if(x2<=-width/2 +100){ x2=width; }

  drawSprites()
  }
  
