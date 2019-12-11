console.log('ready to sketch');

class Ball{
  constructor(x, y, r, colorR, colorG, colorB, alpha, speedX, speedY, times){
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.alpha = alpha;
    this.speedX = speedX;
    this.speedY = speedY;
    this.times = times;
  }
  show(){
    stroke(random(255),random(255),random(255));
    fill(this.colorR, this.colorG, this.colorB);
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
    stroke(6);
    fill(random(255));
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
    random(-1,1), //speedY
    floor(random(9)) //times
    );
  balls.push(ball);
  setInterval(function(){
    ball = new Ball(
    random(width),
    random(height ),
    random(20,46),
    random(255), //colorR
    random(255), //colorG
    random(255), //colorB
    random(255), //alpha
    random(-1,1), //speedX
    random(-1,1), //speedY
    floor(random(9)) //times
    );
  balls.push(ball);
  }, 5000);
}


function mousePressed(){
  beam = new Beam(
    mouseX,
    mouseY,
    -3
    );
  beams.push(beam);
}

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
  background(238);
  player.show();
  for(ball of balls){
    ball.show();
    ball.move();
  }
  for(beam of beams){
    beam.shoot();
    for( ball of balls){
      let d = dist(ball.x, ball.y, beam.x, beam.y );
      if(d < 50){
        ball.colorR = random(255);
        ball.colorG = random(255);
        ball.colorB = random(255);
        ball.r++
        ball.times++
        console.log(ball.times);
      }
      if(ball.times > 50){
        // erase ball==================================
      }
    }
  }
}

























