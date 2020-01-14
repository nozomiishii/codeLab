console.log('ready to sketch');


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  const shotBtn = document.getElementById('shotBtn');
  // createCanvas(windowWidth, windowHeight);
  noCanvas();
  //game starts
  // const video = createCapture(VIDEO);
  // video.size(160, 120);
  const video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight * 0.6);

  shotBtn.addEventListener('click', () => {
    console.log('click');
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    console.log(image64);
    const image = document.createElement('img');
    image.src = image64;
    image.alt = 'photo'
    document.body.append(image);
  });
}
