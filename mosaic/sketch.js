console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



let capture;

let vScale = 16;


let captureStatus = false;

function CaptureReady() {
  return captureStatus = true;
}


// function settingCapture() {
//   let constrains = {
//     video: {
//       mandatory: {
//         maxWidth: width / vScale,
//         maxHeight: height / vScale
//       },
//     }
//   }
//   capture = createCapture(constrains, () => {
//     console.log('capture is ready');
//     CaptureReady()
//   });
// capture.hide();
// }

function settingCapture() {
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
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  settingCapture()

  // const range = document.querySelector('#range');
  // range.addEventListener('change', (e) => {
  //   capture.remove();
  //   vScale = e.target.value;
  //   console.log(vScale);
  //   settingCapture()
  // });
}


function draw() {
  if (captureStatus) {
    background(255);
    capture.loadPixels();
    loadPixels();
    for (let y = 0; y < capture.height; y++) {
      for (let x = 0; x < capture.width; x++) {
        // let index = (x + y * capture.width) * 4;
        // reverse index 
        let index = (capture.width - x + 1 + y * (capture.width)) * 4;
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
}
