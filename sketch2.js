var ship,shipImg,ship1,ship2,ship3,ship4;
var sea,seaImg;
function preload(){
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4")
ship.addAnimation("shipImg")
sea= loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
sea.createSprite = (500,100,40,40);
ship.createSprite = (500,100,40,50)
ship.velocityX  = -5
ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4")
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
 }
    drawSprites();

 
}
