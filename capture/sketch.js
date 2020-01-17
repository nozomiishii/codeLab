console.log('ready to sketch');

const swichCameraBtn = document.getElementById('swichCameraBtn');
let cameraFacing = false;
let canvas, ctx, capture, mode;



function cameraConnection() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  capture = document.getElementById('capture');
  mode = cameraFacing ? "environment" : "user";
  navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: mode
      }
    })
    .then(stream => {
      capture.srcObject = stream;
      console.log(capture.srcObject);
    })
    .then(() => {
      requestAnimationFrame(draw);
    })
    .catch(err => console.error(err));
  cameraFacing = !cameraFacing;


  function draw() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(capture, -canvas.width * 0.6, 0, canvas.width * 2, canvas.height);

    requestAnimationFrame(draw);
  }
}

// swich camera between front and rear 
swichCameraBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cameraConnection();
  console.log(cameraFacing);
})

// setup 
let setupCamera = false;


//game starts
if (!setupCamera) {
  cameraConnection();
  setupCamera = true;
}
