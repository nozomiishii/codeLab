console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}

const width = window.innerWidth;
const height = window.innerHeight;
let x = width /2;
let y = height /2;

console.log(x);
function draw(){
  background(163,203,56,255);
  textSize(50);
  const dog = text('🐕', mouseX, mouseY);

}

