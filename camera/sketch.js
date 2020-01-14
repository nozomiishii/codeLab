let capture;

function setup() {
  createCanvas(480, 480);
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
}
