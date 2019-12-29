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
let creatingBalls;
let playerLife = 3;

const end = document.querySelector('.end');
const displayScore = document.querySelector('.end p');

// let exploded = false;
const api = 'https://api.giphy.com/v1/gifs/search?';
const apiKey = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = "&q=monster"



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function searchGiphies(){
  url = api + query + apiKey;
  loadJSON(url, gotData);
}

let giphes = [];
let imgCount = 0;
function gotData(imgData){
  setInterval(function(){
    while(imgCount < imgData.data.length){
      giphy = imgData.data[imgCount].images.original.url;
      giphes.push(giphy);
      imgCount++;
      console.log(giphes);
    }
  }, 100);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  creatingBalls = setInterval(function(){
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
  searchGiphies();
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
  player = {
    image: '👨🏻‍🚀',
    x: mouseX,
    y: mouseY,
    life: 3,
    show(){
      textSize(46);
      text(this.image, this.x, this.y);
    }
  }
  // Score board
  // text(`Score:${totalScore}`, 20, 50);
  // for(let i = 0; i < playerLife; i++){
  //   text('📡', 20 + i * 30, height - 50);
  // }

  // controll player
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
      if(ball.times > 60){
        // explode when balls are attacked over 60 times
        balls.splice(index, 1);

        // chenge the background color when beam hit balls
        setTimeout(function(){
          if(backgroundColor <= 0 || backgroundColor >= 255){
            backgroundColorRate = backgroundColorRate * -1;
          }
          backgroundColor -= backgroundColorRate;
        }, 1000);
      }
    }
  }

  // balls to player
  for(ball of balls){
    let d = dist(ball.x, ball.y, mouseX, mouseY)
    if(d < ball.r){
      playerLife--
      console.log(playerLife);
    }
    if(playerLife < 0){
      end.classList.add('ended');
      displayScore.innerHTML = `Your Score: ${totalScore}`;
      return dead = true;
    }
  }
}

























