var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1355,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,30,10) ;
  bullet.velocityX = speed;

  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,677.5)
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);
  if (hasCollided(bullet,wall)) { 
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    console.log(damage);
    if(damage>10){
       wall.shapeColor = color("red");
       fill("white");
       textSize(22  );
       textFont('Georgia');
       text("INEFFECTIVE",55,50);
    }
    
    if(damage<=10){
       wall.shapeColor = color ("green");
       fill("white");
       textSize(23);
       textFont('Georgia');
       text("Effective!",55,50);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width/2;
  wallLeftEdge = lwall.x - lwall.width/2;
  if(bulletRightEdge>=wallLeftEdge){
    bullet.velocityX = 0;
    return true;
  }
    return false;
}