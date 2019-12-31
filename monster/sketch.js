const api = 'https://api.giphy.com/v1/gifs/search?';
const apiKey = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = '&q=monster';

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let imgs = [];
let img;

function gotData(giphy) {
  randomMonster = Math.floor(Math.random() * giphy.data.length);
  img = loadImage(giphy.data[randomMonster].images.original.url);
  // createImg(giphy.data[5].images.original.url);
}

let cave;

function preload() {
  cave = {
    x: windowWidth * 0.5,
    y: windowHeight * 0.3,
  };
  url = api + query + apiKey;
  loadJSON(url, gotData);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}



let monster = false;
let monsterX = 100;
let monsterY = 100;

function draw() {
  background(6);
  textSize(58);
  ellipse(cave.x, cave.y, 200)
  imageMode(CENTER);
  text('👨🏻‍🚀', mouseX, mouseY);
  d = dist(cave.x, cave.y, mouseX, mouseY);
  if (d < 30) {
    return monster = true;
  }
  if (monster) {
    image(img, windowWidth * 0.5, windowHeight * 0.3, monsterX, monsterY);
    monsterX += random(-1, 1);
    monsterY += random(-1, 1);
  }
}
