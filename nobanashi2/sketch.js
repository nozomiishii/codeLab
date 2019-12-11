console.log('ready to sketch');
const width = window.innerWidth;
const height = window.innerHeight;

class Bone {
  constructor(x, y, speedX, speedY, size){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  show(){
    text('🦴', this.x, this.y)
  }
  move(){
    if(this.x > width || this.x <= 0 || this.y > height || this.y <= 0){
      this.speedX = this.speedX * -1;
      this.speedY = this.speedY * -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

class Dog {
  constructor(x = 100, y=500){
    this.x = x;
    this.y = y;
  }
  show(){
    text('🐕', mouseX, mouseY);
  }
}

let bone;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dog = new Dog();
  bone = new Bone(
    random(width),
    random(height),
    random(-1,1),
    random(-1,1)
    );
}

let counter = 0;
function draw(){
  background(163,203,56,255);
  textSize(50);
  dog.show();
  bone.show();
  bone.move();
  let d = dist(mouseX, mouseY, bone.x, bone.y)
  if (d < 20){
    bone.x = random(width);
    bone.y = random(height);
    bone.speedX = random(-1,1);
    bone.speedY = random(-1,1);
    counter++
  }
  textAlign(CENTER);
  text(counter, width/2, height/2);
}

