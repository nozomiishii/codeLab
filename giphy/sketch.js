console.log("hello")

let img;

function preload() {
  img = loadImage('kusayari.png');
  console.log(img);
}

function setup() {
  noCanvas();
}

function draw() {
  image(img, 400, 499);
}
