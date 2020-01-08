console.log('ready to sketch');


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


const start = document.getElementById('start');
const op = document.querySelector('.op');

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts


  // start.addEventListener('click', function () {
  //   op.classList.add('start');
  // });

}


function draw() {
  background(255, 140, 0);
}
