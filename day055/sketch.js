console.log('ready to sketch');

class Circle{
  constructor(x, y, r, speedX, speedY, colorR, colorG, colorB, alpha){
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedX = speedX;
    this.speedY = speedY;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.alpha = alpha;
  }
  move(){
    if(floor(this.x) == width || floor(this.y) == height){
      console.log('work')
      this.speedX = this.speedX * -1
      this.speedY = this.speedY * -1
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
  show(){
    stroke(this.colorB, this.colorR, this.colorG);
    fill(this.colorR, this.colorG, this.colorB,this.alpha);
    ellipse(this.x, this.y, this.r * 2);
  }
}

let circles = [];
let circle;
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function mouseDragged(){
  circle =　new Circle(
    mouseX,
    mouseY,
    random(46),
    random(-2,0),
    random(-2,1),
    random(255),
    random(255),
    random(255),
    random(255)
  );
  circles.push(circle);
}

// const backgroundColor = Math.floor(Math.random() * 255);
function draw() {
  background(38, 38, 38);
  for(circle of circles){
    circle.show();
    circle.move();
  }
}

