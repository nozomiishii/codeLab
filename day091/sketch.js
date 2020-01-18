console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// const start = document.getElementById('start');
// const op = document.querySelector('.op');
// start.addEventListener('click', function () {
//   op.classList.add('start');
// });





function setup() {
  ww = windowWidth;
  wh = windowHeight;
  createCanvas(ww, wh);
  background(6);
  //game starts
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

  const photoShot = document.getElementById('photoShot');
  photoShot.addEventListener("click", () => {
    photos.push(new Photo(capture));
  });
}


function draw() {
  if (photos.length > 0) {
    for (let i = 0; i < photos.length; i++) {
      photos[i].show();
      photos[i].move();
    }
  }
}
