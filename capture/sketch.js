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


function draw() {
  background(59)
  let w = 80;
  let h = 60;
  let x = 0;
  let y = 0;
  for (let i = 0; i < captures.length; i++) {
    image(captures[i], x, y, w, h);
    x += w;
    if (x > width) {
      x = 0;
      y += h;
    }
  }

  capture.position(mouseX, mouseY);
}
