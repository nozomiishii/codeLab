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
})
// setup 
let setupCamera = false;

//game starts
if (!setupCamera) {
  cameraConnection();
  setupCamera = true;
}

const takePhotoBtn = document.getElementById('takePhotoBtn');
const show = document.getElementById('show');

takePhotoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  dataURL = canvas.toDataURL();
  // console.log(dataURL);
  let img = document.createElement('img');
  img.src = dataURL;
  show.appendChild(img);
});

const cameraToggle = document.getElementById('cameraToggle');
const controller = document.querySelector('.controller');
let hidden = false;
cameraToggle.addEventListener('click', () => {
  if (!hidden) {
    canvas.style.display = 'none';
    capture.style.display = 'none';
    controller.style.top = '0';
    cameraToggle.textContent = '⬇️';
    return hidden = true;
  } else {
    // canvas.style.display = 'none';
    // capture.style.display = 'none';
    controller.style.top = '50vh';
    cameraToggle.textContent = '⬆️';
    return hidden = false;
  }
})
