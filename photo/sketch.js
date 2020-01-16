console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



const capture = document.getElementById('capture');
async function displayCapture() {
  const media = await navigator.mediaDevices.getUserMedia(constraints);
  capture.srcObject = media;
  console.log(media);
}


let front = false;
const constraints = {
  audio: false,
  video: {
    facingMode: (front ? "user" : "environment")
  }
};
document.getElementById('swichCameraBtn').onclick = function () {
  console.log(11);
  front = !front;
};


displayCapture().catch(err => console.error(err));

function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);
  //game starts
}


function draw() {
  background(255, 140, 0);
}
