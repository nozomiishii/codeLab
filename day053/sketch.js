console.log('ready to sketch');

class Power{
  constructor(x, y ,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show(){
    ellipse(this.x, this.y, this.r * 2);
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    this.x += random(-15, 15);
    this.y += random(-15, 15);
  }
}
let power;
const powers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  for(let i = 0; i< powers.length; i++){
    powers[i].show();
  }
}

let counter = 3;
function mousePressed(){
  for(i = 0; i < counter; i++){
    powers.push(new Power(random(width), random(height), random(40)));
  };
  counter += 2;
}
