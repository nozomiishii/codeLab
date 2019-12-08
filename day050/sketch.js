console.log('ready to sketch');
window.addEventListener('touchmove.noScroll', function(e) {
    e.preventDefault();
});

function setup() {
  createCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
}

function mouseDragged(){
  noStroke();
  fill(1, 200);
  rect(mouseX, mouseY, 20, 20, 3);
}
