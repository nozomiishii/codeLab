console.log('ready to sketch');
window.addEventListener('touchmove.noScroll', function(e) {
    e.preventDefault();
});

function setup() {
  createCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
  noStroke();
  fill(200,200);
  rect(mouseX, mouseY, 20, 20);
  fill(255)
  rect(0, 0, 20, 20);
}

function mousePressed(){
  createCanvas(windowWidth, windowHeight * 0.8);
}

