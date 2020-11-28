var bullet,wall;
var speed,bulletweight;
var thickness;

function setup() {
  createCanvas(1600,650);
  thicknessofwall=random(22,83);
  speed=random(223,321);
  bulletweight=random(30,52);
  bullet=createSprite(50,200,60,20);
  bullet.velocityX=speed;
  bullet.shapeColor="black";
  wall=createSprite(1200,200,thicknessofwall,height/2);
  wall.shapeColor=(80,80,80);
} 

function draw() {
  background("white"); 
   //bullet.x=World.mouseX;
   
   if (hasCollided(bullet,wall))
   {
     bullet.velocityX=0;
     var damage=0.5*bulletweight*speed*speed/(thicknessofwall*thicknessofwall*thicknessofwall);
    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,wall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
  
}