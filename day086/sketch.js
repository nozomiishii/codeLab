console.log('ready to sketch');


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let capture;
let w;
let h;



function setup() {

  const shotBtn = document.getElementById('shotBtn');
  // createCanvas(windowWidth, windowHeight);
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
  canvas = createCanvas(w, h);




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
