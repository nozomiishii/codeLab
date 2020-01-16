console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



// const capture = document.getElementById('capture');
// async function displayCapture() {
//   const media = await navigator.mediaDevices.getUserMedia(constraints);
//   capture.srcObject = media;
//   console.log(media);
// }


// let front = false;
// const constraints = {
//   audio: false,
//   video: {
//     facingMode: (front ? "user" : "environment")
//   }
// };
// const swichCameraBtn = document.getElementById('swichCameraBtn');
// swichCameraBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(11);
//   front = !front;
//   document.body.style.background = '#45D8EA'
//   displayCapture().catch(err => console.error(err));
// });


// displayCapture().catch(err => console.error(err));


// plan B 
const swichCameraBtn = document.getElementById('swichCameraBtn');
let cameraFacing = false;

// switch camera 
swichCameraBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.style.background = '#BD3023'

  const capture = document.getElementById('capture');
  const mode = cameraFacing ? "environment" : "user";



  // カメラ切り替え
  navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: mode
      }
    })
    .then(stream => capture.srcObject = stream)
    .catch(err => alert(`${err.name} ${err.message}`));

  cameraFacing = !cameraFacing;
});


function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);
  //game starts
}


function draw() {
  background(255, 140, 0);
}
