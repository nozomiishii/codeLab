console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts
  noStroke()
  textAlign(CENTER);
}


function draw() {
  background(230);

  textSize(mouseY)
  text('🦸🏻‍♀️', mouseX, height * .6);

  let inverseX = width - mouseX;
  let inverseY = height - mouseY;

  textSize(inverseY)
  text('🦹🏻‍♀️', inverseX, height * .6);
}
