console.log('ready to sketch');
// sketch of desire 
const api = 'https://api.giphy.com/v1/gifs/search?';
const apiKay = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = '&q=desire';

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function getDesire(json) {
  randomDesire = Math.floor(Math.random() * json.data.length);
  createImg(json.data[randomDesire].images.original.url);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  url = api + query + apiKay;
  fetch(url)
    .then(response => response.json())
    .then((json) => getDesire(json))
    .catch(err => console.log(err));
}

let darkness = 6;


let hero;
let heroY = window.innerHeight / 2;

function draw() {
  background(darkness);
  textAlign(CENTER);
  textSize(69);
  hero = text('🦸🏻‍♂️', windowWidth / 2, heroY);
  console.log(hero);
  heroY += random(-1, 1);
}
