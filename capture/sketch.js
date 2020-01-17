console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let cameraFacing = false;
const capture = document.getElementById('capture');
const mode = cameraFacing ? "environment" : "user";

navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: mode
    }
  })
  .then(stream => capture.srcObject = stream)
  .catch(err => console.error(err));

const cameraFacingBtn = document.getElementById('cameraFacingBtn');

cameraFacingBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: mode
      }
    })
    .then(stream => capture.srcObject = stream)
    .catch(err => console.error(err));

  cameraFacing = !cameraFacing;
  console.log(cameraFacing);
})


function setup() {
  noCanvas();
  //game starts
}


// function draw() {
//   background(255, 140, 0);
// }
