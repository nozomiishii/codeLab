console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// const start = document.getElementById('start');
// const op = document.querySelector('.op');
// start.addEventListener('click', function () {
//   op.classList.add('start');
// });


// let capture;
function setup() {
  const ww = windowWidth;
  const wh = windowHeight;
  createCanvas(ww, wh);
  capture = createCapture({
    audio: false,
    video: {
      width: ww,
      height: wh
    }
  }, function () {
    console.log('capture ready.')
  });
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
  background(6);

  const photoShot = document.getElementById('photoShot');
  photoShot.addEventListener("click", () => {
    // img = capture.loadPixels();

    photos.push(new Photo(capture));
  });
}


function draw() {
  // image(capture, 0, 0, 320, 240);
  if (photos.length > 0) {
    for (let i = 0; i < photos.length; i++) {
      photos[i].show();
      photos[i].move();
    }
  }
}
