console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


const constraints = {
  audio: false,
  video: true
};



const capture = document.getElementById('capture');
async function displayCapture() {
  const media = await navigator.mediaDevices.getUserMedia(constraints);
  capture.srcObject = media;
  console.log(media);
}

// const swichCameraBtn = document.getElementById('swichCameraBtn');
// let frontCamera = true;
// swichCameraBtn.addEventListener('click', () => {
//   console.log(11);
//   if (frontCamera) {
//     constraints.video = {
//       facingMode: {
//         exact: "environment"
//       }
//     };
//     return frontCamera = false;
//   } else {
//     constraints.video = true;
//     return frontCamera = true;
//   }
// });



function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);
  //game starts
  displayCapture().catch(err => console.error(err));
}


function draw() {
  background(255, 140, 0);
}
