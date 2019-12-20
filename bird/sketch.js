console.log('ready to sketch');

let woods = [];
let wood;
let woodsInterval;
let dead = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  woodsInterval = setInterval(createWoods, 2000);
}

function createWoods(){
  woods.push(new Wood(width, random(height),random(10, 100)));
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255, 140, 0);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  player.show();
  for(wood of woods){
    wood.show();
    let d = dist(player.x, player.y, wood.x, wood.y);
    if(d < wood.h){
      background(6);
      return dead = true;
    }
  }
  if(dead){
    clearInterval(woodsInterval);
    player.y = windowHeight/2;
  }
}

function mousePressed(){
  player.y -= 20;
}
