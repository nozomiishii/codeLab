console.log('ready to sketch');


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let img;

function preload() {
  img = loadImage('kusayari.png');
}

const start = document.getElementById('start');
const op = document.querySelector('.op');

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts


  start.addEventListener('click', function () {
    op.classList.add('start');
  });

}


function draw() {
  background(255, 140, 0);
  imageMode(CENTER);
  image(img, windowWidth * 0.5, windowHeight * 0.3, 300, 300);

  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('ready!', windowWidth * 0.5, windowHeight * 0.7);
  ellipseMode(CENTER);
  ellipse(windowWidth * 0.5, windowHeight * 0.7 + 90, random(40), random(40));
}
