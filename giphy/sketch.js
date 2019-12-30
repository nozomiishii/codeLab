console.log('ready to sketch');

const api = "https://api.giphy.com/v1/gifs/search?";
const apiKey = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = '&q=mosnter';

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function gotData(giphy) {
  createImg()
  console.log(giphy.data[0].url);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  url = api + query + apiKey;
  loadJSON(url, gotData);
}


function draw() {
  background(255, 140, 0);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('ready!', windowWidth / 2, windowHeight / 2);
  ellipseMode(CENTER);
  ellipse(windowWidth / 2, windowHeight / 2 + 90, random(40), random(40));
}
