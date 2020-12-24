var wall,thikness;
var bullet,speed,weight;


function setup() {
  createCanvas(1500,400);

  thikness=random(22,83);

  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,300,50,50);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thikness,height/2);
  
}

function draw() {

    background("black");

    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*weight/(thikness*thikness*thikness);
      
      if(damage>10){
        wall.shapeColor=color(225,0,0);
      }
      
      if(damage<10){
        wall.shapeColor=color(0,225,0);
      }
    }
  drawSprites();
}
function hasCollided(lbullet ,lwall){
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
  return false;
}





