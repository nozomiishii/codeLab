console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(random(255),random(255),random(255));

  for(let x = 0; x <= width; x += 50){
    for(let y = 0; y <= height; y += 50){
      fill(random(255),random(255),random(255));
      stroke(random(255),random(255),random(255));
      rect(x, y, 20, 20);
    }
  }
}

