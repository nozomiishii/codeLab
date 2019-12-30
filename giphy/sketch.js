console.log("hello")


let img;

function preload() {
  img = loadImage('day070.png');
  console.log(img);

}


function setup() {
  noCanvas()
  // createCanvas(1000, 1000);
  image(img, 40, 40)
}

function draw() {
  background(200);
}
