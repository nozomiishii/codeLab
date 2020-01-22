console.log('ready to sketch');
const url = "https://api.giphy.com/v1/gifs/search?&q=hero&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz"

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let imgs = [];
let img;

function gotData(giphy) {
  for (let i = 0; i < 10; i++) {
    img = loadImage(giphy.data[i].images.original.url);
    imgs.push(img);
  }
}

function preload() {
  loadJSON(url, gotData);
}

let hero, villain, heroImg, villainImg, randomHero, randomVillain;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts
  noStroke()
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(18, 18, 18);

  if (randomHero) {
    image(imgs[randomHero], mouseX, height * .6, mouseY, mouseY);
  } else {
    textSize(mouseY)
    hero = '🦸🏻‍♀️';
    text(hero, mouseX, height * .6);
  }

  let inverseX = width - mouseX;
  let inverseY = height - mouseY;

  if (randomVillain) {
    image(imgs[randomVillain], inverseX, height * .6, inverseY, inverseY);
  } else {
    textSize(inverseY)
    villain = '🦹🏻‍♀️'
    text(villain, inverseX, height * .6);
  }
}

function mousePressed() {

  randomHero = Math.floor(Math.random() * imgs.length);

  randomVillain = Math.floor(Math.random() * imgs.length);
}
