console.log('ready to sketch');
window.addEventListener('touchmove.noScroll', function(e) {
    e.preventDefault();
});

function setup() {
  createCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
  noStroke();
  fill(1);
  ellipse(mouseX, mouseY, 10, 15);
}

