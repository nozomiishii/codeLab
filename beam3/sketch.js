console.log('ready to sketch');
let balls = [];
let ball;
let player;
let beams = [];
let beam;
let backgroundColor = 236;
let backgroundColorRate = 50;
let totalScore = 0;
let totalScoreColorR = 238;
let totalScoreColorG = 238;
let totalScoreColorB = 238;
let dead = false;


const end = document.querySelector('.end');
const displayScore = document.querySelector('.end p');

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
  background(backgroundColor);
  textSize(24);
  stroke(6);
  fill(totalScoreColorR, totalScoreColorG, totalScoreColorB);
  text(`Score:${totalScore}`, 20, 50);
  player = {
    image: '👨🏻‍🚀',
    x: mouseX,
    y: mouseY,
    show(){
      textSize(46);
      text(this.image, this.x, this.y);
    }
  }

  player.show();
  for(ball of balls){
    ball.show();
    ball.move();
  }

  // beams to balls
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
        totalScoreColorR = random(255);
        totalScoreColorG = random(255);
        totalScoreColorB = random(255);
        if(!dead){
          totalScore++
        }
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

  // balls to player
  for(ball of balls){
    let d = dist(ball.x, ball.y, mouseX, mouseY)
    if(d < ball.r){
      end.classList.add('ended');
      displayScore.innerHTML = `Your Score: ${totalScore}`;
      return dead;
    }
  }
}

























