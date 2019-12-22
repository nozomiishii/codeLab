console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let bullets = [];

function draw() {
  background(59);
  player.show();
  for(bullet of bullets){
    bullet.shoot();
    console.log("!!");
  }
}

function mouseClicked(){
  bullets.push(new Bullet());
}
