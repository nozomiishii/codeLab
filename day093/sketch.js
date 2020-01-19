console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let sliderG;

function setup() {
  canvas = createCanvas(300, 240);

  pixelDensity(1);

  sliderG = createSlider(0, 255, 100);

}


function draw() {
  background(48, 140, 9);
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index + 0] = random(255);
      pixels[index + 1] = sliderG.value();
      pixels[index + 2] = x;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
