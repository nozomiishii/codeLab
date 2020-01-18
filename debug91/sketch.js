console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// const start = document.getElementById('start');
// const op = document.querySelector('.op');
// start.addEventListener('click', function () {
//   op.classList.add('start');
// });


const ww = 640;
const wh = 480;

function setup() {
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
  capture.size(ww, wh);
  createCanvas(ww, wh);
  background(6);

  // const photoShot = document.getElementById('photoShot');
  // photoShot.addEventListener("click", () => {
  //   img = capture.loadPixels();

  //   photos.push(new Photo(img));
  // });
}


function draw() {
  if (photos.length > 0) {
    for (let i = 0; i < photos.length; i++) {
      photos[i].show();
      photos[i].move();
    }
  }
}
