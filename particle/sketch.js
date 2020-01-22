console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
var video;
var vScale = 16;

var particles = [];

var slider;

let img, picture;

function preload() {
  img = loadImage('profile.png');
}

function setup() {
  createCanvas(640, 480);
  set(0, 0, img);
  updatePixels();
  line(0, 0, width, height);
  line(0, height, width, 0);
  // for (var i = 0; i < 200; i++) {
  //   particles[i] = new Particle(random(width), random(height));
  // }
  // background(51);
}

// function draw() {
//   background(51);
//   for (var i = 0; i < particles.length; i++) {
//     particles[i].update();
//     particles[i].show();
//   }
// }
