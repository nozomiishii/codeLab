var capture;
var w = 640;
var h = 480;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  // capture.size(320, 240);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter(INVERT);
}
