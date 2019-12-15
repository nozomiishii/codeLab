console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255, 140, 0);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('ready!', windowWidth/2, windowHeight/2);
}

