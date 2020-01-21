console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



let capture;
let vScale = 4;


let captureStatus = false;

function CaptureReady() {
  return captureStatus = true;
}

function settingCapture() {
  let constrains = {
    video: {
      mandatory: {
        maxWidth: width / vScale,
        maxHeight: height / vScale
      },
    }
  }
  capture = createCapture(constrains, () => {
    console.log('capture is ready');
    CaptureReady()
  });
  capture.hide();
}


let uncencered = false;

function setup() {
  createCanvas(160, 120);
  pixelDensity(1);
  settingCapture();

  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    capture.remove();
    if (!uncencered) {
      let constrains = {
        video: {
          mandatory: {
            maxWidth: width,
            maxHeight: height
          },
        }
      }
      capture = createCapture(constrains, () => {
        console.log('capture is ready');
        CaptureReady()
      });
      capture.hide();
      return uncencered = !uncencered;
    } else {
      settingCapture();
      return uncencered = !uncencered;
    }

  });
}


function draw() {
  if (captureStatus && !uncencered) {
    background(255);
    capture.loadPixels();
    loadPixels();
    for (let y = 0; y < capture.height; y++) {
      for (let x = 0; x < capture.width; x++) {
        // let index = (x + y * capture.width) * 4;
        // reverse index 
        let index = (x + y * (capture.width)) * 4;
        let r = capture.pixels[index + 0];
        let b = capture.pixels[index + 1];
        let g = capture.pixels[index + 2];
        let bright = (r + b + g) / 3;

        noStroke();
        fill(bright);
        rect(x * vScale, y * vScale, vScale, vScale);
      }
    }
  } else {
    textSize(18);
    textAlign(CENTER);
    text('loading...', windowWidth * .5, windowHeight * .5);
  }

  if (uncencered) {
    image(capture, 0, 0, width, height);
  }

}
