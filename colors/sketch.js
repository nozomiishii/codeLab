console.log('ready to sketch');

class Ball{
  constructor(x, y, r, colorR, colorG, colorB, alpha, speedX, speedY){
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.alpha = alpha;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  show(){
    fill(6);
    ellipse(this.x, this.y, this.r * 2);
  }
  move(){
    if(this.x > width || this.y > height || this.x < 0 || this.y < 0){
      this.speedX = this.speedX * -1
      this.speedY = this.speedY * -1
    }
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }
}

class Beam {
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  shoot(){
    ellipse(this.x, this.y, 5, 20);
    this.y += this.speed;
  }
}


let balls = [];
let ball;
let player;
let beams = [];
let beam;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(
    random(width),
    random(height ),
    random(20,46),
    random(255), //colorR
    random(255), //colorG
    random(255), //colorB
    random(255), //alpha
    random(-1,1), //speedX
    random(-1,1) //speedY
    );
  balls.push(ball);
}


function mousePressed(){
  beam = new Beam(
    mouseX,
    mouseY,
    -3
    );
  beams.push(beam);
}

console.log(beam);
function draw(){
  player = {
    image: '👨🏻‍🚀',
    x: mouseX,
    y: mouseY,
    show(){
      textSize(46);
      text(this.image, this.x, this.y);
    }
  }
  background(220);
  player.show();
  for(ball of balls){
    ball.show();
    ball.move();
  }
  for(beam of beams){
    beam.shoot();
    let d = dist(ball.x, ball.y, beam.x, beam.y );
    if(d < 50){

    }
  }
}

























