console.log("hello")

let img;
function preload() {
  img = loadImage('sample.png');

}

function setup() {

  createCanvas(windowWidth, windowHeight);

}


// イメージをキャンバスに描画する
function draw() {
  background(6);
  image(img, 0, 0);
}