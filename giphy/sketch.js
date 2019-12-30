console.log("hello")

var img;

function preload() {
  img = loadImage('kusayari.png');

}

function setup() {

  createCanvas(windowWidth, windowHeight);

}


// イメージをキャンバスに描画する
function draw() {
  background(6);
  image(img, 0, 0);
}
