var player
var playerRightImage
var playerleftImage
var backgroundImage
var ground
var groundImage

function preload(){
playerRightImage= loadAnimation("sprite1.png","sprite2.png","sprite3.png","sprite4.png","sprite5.png","sprite6.png","sprite7.png","sprite8.png")
playerLeftImage= loadAnimation("sprite1-left.png","sprite2-left.png","sprite3-left.png","sprite4-left.png")
backgroundImage=loadImage("background.png")
groundImage= loadImage("ground1.png")
obstacleImage= loadImage("obstacle.png")
}


function setup() {
  createCanvas(1200,600);
  player= createSprite(200,200,50,50)
  player.addAnimation("running",playerRightImage)
  
  player.scale=1.5
  ground= createSprite(600,590,1220,20)
  

}

function draw() {
  background(backgroundImage);  
  player.collide(ground)

  if(keyDown(RIGHT_ARROW)){
player.x= player.x +2
player.changeAnimation("running",playerRightImage)
  }
  if(keyDown(LEFT_ARROW)){
    player.x= player.x-2
    player.changeAnimation("running",playerLeftImage)
  }
  if(keyDown("space")){
    player.velocityY= -12

  }
  player.velocityY= player.velocityY+0.8
  spawnIceCubes();
  drawSprites();
  
}
function spawnIceCubes(){
  if(frameCount%80===0){
    var obstacle= createSprite(800,540,50,50)
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.6

  }


}

