console.log('ready to sketch');

let woods = [];
let wood;
function setup() {
  createCanvas(windowWidth, windowHeight);
  woods.push(new Wood(width));
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
  }
}

function mousePressed(){
  player.y -= 20;
}
