console.log('ready to sketch');

const api = "https://api.giphy.com/v1/gifs/search?";
const apiKay = "&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz";
let query = "&q=2020"

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function preload() {

}

let counter = 10;
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');
// countDown() {
//   setInterval(() => {
//     if (counter < 0) {
//       number.innerHTML = "Happy New Year";
//     } else {
//       counter--;
//       number.innerHTML = counter;
//     }
//   }, 1000);
// }

// getData(){
//   fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     img = loadImage(json.data[0].images.original.url);
//     return imgs.push(img);
//   })
// }

let imgs = [];

function setup() {
  url = api + apiKay + query;
  setInterval(() => {
    counter--;
    if (counter < 0) {
      btn.style.display = "none";
      number.innerHTML = "Happy New Year";
    } else {
      number.innerHTML = counter;
    }
  }, 1000);
  // countDown();
  // .then(getData())
  // .catch(err => console.error(err));
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(6);
  if (imgs.length > 0) {
    imageMode(CENTER);
    image(imgs[0], windowWidth * 0.5, windowHeight * 0.3);
  }
}
