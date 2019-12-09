console.log('nobanashi2');

const width = window.innerWidth;
const height = window.innerHeight;

const dog = {
  image:'🐕',
  comment: '🐕:"骨がにげてしまう"',
  x:100,
  y:100
}
const bone = {
  image:'🦴',
  x:200,
  y:200
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bone.x = Math.floor(Math.random() * width);
  bone.y = Math.floor(Math.random() * height);
  dog.x = mouseX;
  dog.y = mouseY;
}

function draw(){
  background(163,203,56,255);
  textSize(50);
  text(dog.image, mouseX, mouseY);
  // bone
  text(bone.image, bone.x, bone.y);
  console.log(mouseX)
}


function mousePressed(){
  bone.x = Math.floor(Math.random() * width);
  bone.y = Math.floor(Math.random() * height);
  console.log(`bone.x ${bone.x}`);
  console.log(`dog.x ${dog.x}`);
  background(255);
}

