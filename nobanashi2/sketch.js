console.log('ready to sketch');
const width = window.innerWidth;
const height = window.innerHeight;

class Bone {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
  }
  show(){
    text('🦴', this.x, this.y)
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
  bone = new Bone(random(width), random(height));
}

let counter = 0;
function draw(){
  background(163,203,56,255);
  textSize(50);
  dog.show();
  bone.show();
  let d = dist(mouseX, mouseY, bone.x, bone.y)
  if (d < 20){
    bone.x = random(width);
    bone.y = random(height);
    counter++
  }
  textAlign(CENTER);
  text(counter, width/2, height/2);
}

