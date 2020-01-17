console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const swichCameraBtn = document.getElementById('swichCameraBtn');
let cameraFacing = false;
let capture, mode;

function cameraConnection() {
  let capture = document.getElementById('capture');
  let mode = cameraFacing ? "environment" : "user";
  navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: mode
      }
    })
    .then(stream => capture.srcObject = stream)
    .catch(err => console.error(err));
  cameraFacing = !cameraFacing;
}

// swich camera between front and rear 
swichCameraBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cameraConnection();
  console.log(cameraFacing);
})

// setup 
let setupCamera = false;

function setup() {
  noCanvas();
  //game starts
  if (!setupCamera) {
    cameraConnection();
    return setupCamera = true;
  }
}


// function draw() {
//   background(255, 140, 0);
// }
