console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let animal;
function preload(){
  animal = loadJSON('sample.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // animal = {
  //   giraffe: "🦒"
  // }
}


function draw() {
  background(50, 140, 20);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text(animal.giraffe, windowWidth/2, windowHeight/2);
}

