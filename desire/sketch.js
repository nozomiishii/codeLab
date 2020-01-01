console.log('ready to sketch');
// sketch of desire 
const api = 'https://api.giphy.com/v1/gifs/search?';
const apiKay = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = '&q=boobs';

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// create new desire
function getDesire(json) {
  setInterval(() => {
    randomDesire = Math.floor(Math.random() * json.data.length);
    img = loadImage(json.data[randomDesire].images.original.url);
    desires.push(new Desire(img));
    // console.log(desires);
  }, 1000);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // get images of desire from api 
  url = api + query + apiKay;
  fetch(url)
    .then(response => response.json())
    .then((json) => getDesire(json))
    .catch(err => console.log(err));
}

let darkness = 6;


let hero;
let heroY = window.innerHeight / 2 + 100;
let heroSize = 300;

function draw() {
  background(darkness);
  textAlign(CENTER);
  textSize(heroSize);
  if (heroSize > 0) {
    heroY += random(-1, 1);
    hero = text('🦸🏻‍♂️', windowWidth / 2, heroY);
    for (let i = 0; i < desires.length; i++) {
      desires[i].show();
    }
  } else {
    background(255);
    textSize(92);
    text('👶🏻', windowWidth / 2, windowHeight * 0.4);
    textSize(48);
    fill(51, 153, 255);
    text('清らかだなあ', windowWidth / 2, windowHeight * 0.6);
  }

}

function mousePressed() {
  for (let i = 0; i < desires.length; i++) {
    desires[i].clicked();

  }
}