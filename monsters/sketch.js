console.log('ready to sketch');

const api = "https://api.giphy.com/v1/gifs/search?";
const apiKay = "&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz";
let query = "&q=monster"

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



// creating monsters from giphy api 
let monsters = [];

function createSingleMonster(json) {
  setInterval(() => {
    // get images from api 
    randomMonster = Math.floor(Math.random() * json.data.length);
    img = loadImage(json.data[randomMonster].images.original.url);
    return monsters.push(new Monster(img));
  }, 100);
}

function createMonsters() {
  url = api + query + apiKay;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      createSingleMonster(json);
    })
    .catch(err => console.error(err));
}

// setting
function setup() {
  createCanvas(windowWidth, windowHeight);
  createMonsters();
}

// draw canvas 
function draw() {
  background(255, 140, 0);

  // monsters come out
  if (monsters) {
    imageMode(CENTER);
    for (let i = 0; i < monsters.length; i++) {
      monsters[i].show();
    }
  }



}
