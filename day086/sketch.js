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

  const shotBtn = document.getElementById('shotBtn');
  canvas = createCanvas(w, h);
  canvas.style("display", "block");

  w = windowWidth;
  h = windowHeight * 0.6;
  capture = createCapture({
    audio: false,
    video: {
      width: w,
      height: h
    }
  }, function () {
    console.log('capture ready.')
  });
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
  capture.size(w, h);




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
