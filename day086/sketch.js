console.log('ready to sketch');

// const constraints = {
//   audio: false,
//   video: {
//     width: window.innerWidth,
//     height: window.innerHeight * 0.6
//   }
// };

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let capture;
let canvas;
let w;
let h;


// navigator.mediaDevices.getUserMedia(constraints).then(
//   console.log('work')
// )

function setup() {
  w = 350;
  h = 400;

  canvas = createCanvas(w, h);

  capture = createCapture({
    audio: false,
    video: {
      width: w,
      height: h
    }
  }, function () {
    console.log('capture ready.')
  });
  capture.hide();
  capture.size(w, h);



  const shotBtn = document.getElementById('shotBtn');

  shotBtn.addEventListener('click', () => {
    console.log('click');
    capture.loadPixels();
    const image64 = capture.canvas.toDataURL();
    console.log(image64);
    const image = document.createElement('img');
    image.src = image64;
    image.alt = 'photo'
    document.body.append(image);
  });
}


function draw() {
  image(capture, 0, 0);
}
