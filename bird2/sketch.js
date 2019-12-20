console.log('ready to sketch');
// let gameIsStarted = false;

let gameIsStarted = true;  //this must erase

let player;

let woods = [];
let wood;
let woodsInterval;
let dead = false;

let timerInterval;
let timer;
let count = 0;

//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
  // woods
  // woodsInterval = setInterval(createWoods, 2000);

  // // timer
  // timer = createP('score: 0');
  // timer.position(40, 40);
  // timer.class('timer');
  // timerInterval = setInterval(counter, 100);

  // return gameIsStarted = true;
});


function setup() {
  createCanvas(windowWidth, windowHeight);
  // game start
  // player
  player = new Player('🦉', width * 0.2, 0);

  // tmp=================================================
  woodsInterval = setInterval(createWoods, 2000);

  // timer
  timer = createP('score: 0');
  timer.position(40, 40);
  timer.class('timer');
  timerInterval = setInterval(counter, 100);
  // =======================================================
}

function counter(){
  timer.html(`score: ${count}`);
  count++;
}


function createWoods(){
  woods.push(new Wood(width, random(height),random(10, 100)));
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(6);

  // player
  if(gameIsStarted){
    player.show();
  }
  for(wood of woods){
    wood.show();
    let d = dist(player.x, player.y, wood.x, wood.y);
    if(d < wood.h + 24){
      background(6, 200);
      return dead = true;
    }
  }
  if(dead){
    timer.position(windowWidth/2, windowHeight/2)
    player.y = windowHeight/2;
    clearInterval(woodsInterval);
    clearInterval(timerInterval);
    background(6, 200);
  }
}

function mousePressed(){
  if(gameIsStarted){
    player.y -= 20;
  }
}
