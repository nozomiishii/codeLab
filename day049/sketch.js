console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill(200,200);
  rect(mouseX, mouseY, 20, 20);
  fill(255)
  rect(0, 0, 20, 20);
}

function mousePressed(){
  createCanvas(windowWidth, windowHeight);
}

