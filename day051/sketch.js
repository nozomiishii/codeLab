console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}

const width = window.innerWidth;
const height = window.innerHeight;

function draw(){
  background(163,203,56,255);
  textSize(50);
  text('🐕', mouseX, mouseY);
}

