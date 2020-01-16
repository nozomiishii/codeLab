console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const constraints = {
  audio: false,
  video: {
    facingMode: {
      exact: "environment"
    }
  }
};


const capture = document.getElementById('capture');
async function displayCapture() {
  const media = await navigator.mediaDevices.getUserMedia(constraints);
  capture.srcObject = media;
  console.log(media);
}

const swichCameraBtn = document.getElementById('swichCameraBtn');
let frontCamera = true;
swichCameraBtn.addEventListener('click', () => {
  console.log(11);
  if (frontCamera) {
    constraints.video = {
      facingMode: {
        exact: "environment"
      }
    };
    console.log(frontCamera);
    return frontCamera = false;
  } else {
    constraints.video = true;
    console.log(frontCamera);
    return frontCamera = true;
  }
});



displayCapture().catch(err => console.error(err));

function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);
  //game starts
}


function draw() {
  background(255, 140, 0);
}
