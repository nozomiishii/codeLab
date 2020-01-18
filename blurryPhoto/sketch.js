console.log('ready to sketch');


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

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
  createCanvas(620, 480);
  capture = createCapture(constraints, () => console.log('capture'));
  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap() {
  captures.push(capture.get());
  // image(video, 0, 0, 320, 240);
}

let captures = [];
class Capture {

}

function draw() {
  for (let i = 0; i < captures.length; i++) {
    tint(255, 50);
    image(captures[i], 0, 0, 320, 240);
  }
}
