console.log('ready to sketch');
let balls = [];
let ball;
let player;
let beams = [];
let beam;
let backgroundColor = 236;
let backgroundColorRate = 50;

// let exploded = false;

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
  // if(exploded){
  //   console.log('!!');
  //   backgroundColor();
  // } else {
    background(backgroundColor);
  // }
  player.show();
  for(ball of balls){
    ball.show();
    ball.move();
  }
  for(beam of beams){
    beam.shoot();
    for([index, ball] of balls.entries()){
      let d = dist(ball.x, ball.y, beam.x, beam.y );
      if(d < 50){
        ball.colorR = random(255);
        ball.colorG = random(255);
        ball.colorB = random(255);
        ball.alpha = random(255);
        ball.speedX += random(-1,1);
        ball.speedY += random(-1,1);
        ball.r++
        ball.times++
        console.log(ball.times);
      }
      if(ball.times > 70){
        balls.splice(index, 1);
        if(backgroundColor <= 0 || backgroundColor >= 255){
          backgroundColorRate = backgroundColorRate * -1;
        }
          backgroundColor -= backgroundColorRate;
      }
    }
  }
}

























