console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255, 140, 0);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('ready!', windowWidth/2, windowHeight/2);
  ellipseMode(CENTER);
  ellipse(windowWidth/2, windowHeight/2 + 90, random(40), random(40));
}

