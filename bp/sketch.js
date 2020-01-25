console.log('sketch.js');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts

}


function draw() {
  background(48, 140, 9);

  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('👩🏻‍🎓: "ready!"', windowWidth * 0.5, windowHeight * 0.5);

}
