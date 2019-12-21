console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let thunders = [];
let clicked = false;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = createP('karamaru?');
  p.position(windowWidth/2, windowHeight/2);
  p.style('transform', 'translate(-50%, -50%)');
  // p.style('font-size', '48px');
  p.class('title');
}

function mousePressed(){
  if(!clicked){
    p.remove();
    for(let i = 0; i < 1; i++){
      thunders.push(new Thunder(windowWidth/2, windowHeight/2));
      // thunders.push(new Thunder(mouseX, mouseY));
    }
    return clicked = true;
  }
}

function draw() {
  background(238);

  for( thunder of thunders){
    thunder.show();
    thunder.move();
  }
}

