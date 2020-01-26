console.log('ready to sketch');


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let capture;

function setup() {
  let constraints = {
    video: {
      mandatory: {
        maxWidth: 320,
        maxHeight: 240
      },
      optional: [{
        maxFrameRate: 10
      }]
    },
    audio: false
  };
  background(59);
  createCanvas(windowWidth, windowHeight * 0.5);
  capture = createCapture(constraints, () => console.log('capture'));
  // button = createButton('snap');
  // button.mousePressed(takesnap);
  setInterval(() => {
    takesnap()
  }, 1000);
}

function takesnap() {
  captures.push(capture.get());
  // image(video, 0, 0, 320, 240);
}

let captures = [];


// let x = random(width);
// let y = random(height);
// let speedX = random(-1, 1);
// let speedY = random(-1, 1);

function draw() {
  background(59)
  let w = 60;
  let h = 60;
  for (let i = 0; i < captures.length; i++) {
    image(captures[i], x, y, w, h);
    x += speedX;
    y += screenY;
  }

  capture.position(mouseX, mouseY);
}
