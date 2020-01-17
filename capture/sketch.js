console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const cameraFacingBtn = document.getElementById('cameraFacingBtn');
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
}


cameraFacingBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cameraConnection()
  cameraFacing = !cameraFacing;
  console.log(cameraFacing);
})


function setup() {
  noCanvas();
  //game starts
  cameraConnection()
}


// function draw() {
//   background(255, 140, 0);
// }
