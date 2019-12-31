console.log('ready to sketch');

const api = "https://api.giphy.com/v1/gifs/search?";
const apiKay = "&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz";
let query = "&q=monster"

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function preload() {

}

let img;

function setup() {
  url = api + query + apiKay;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      // randomMonster = Math.floor(Math.random() * json.data.length);
      // img = json.data[0].images.original.url;
      img = loadImage(json.data[0].images.original.url);
    })
    .catch(err => console.error(err));
  createCanvas(windowWidth, windowHeight);

}

let monsterX = 100;
let monsterY = 100;

function draw() {
  background(255, 140, 0);

  if (img) {
    image(img, windowWidth * 0.5, windowHeight * 0.3, monsterX, monsterY);
  }

}
