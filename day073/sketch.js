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

let timer;

function countDown() {
  return new Promise((resolve, reject) => {
    timer = setInterval(() => {
      counter--;
      if (counter < 0) {
        btn.style.display = "none";
        number.innerHTML = "Happy New Year";
        clearInterval(timer);
        resolve();
      } else {
        number.innerHTML = counter;
      }
    }, 1000);
  })
}

function getData() {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      randomData = Math.floor(Math.random() * json.data.length);
      img = loadImage(json.data[randomData].images.original.url);
      return imgs.push(img);
    })
}


let imgs = [];

function setup() {
  url = api + apiKay + query;
  btn.addEventListener('click', function () {
    countDown()
      .then(() => getData())
      .catch(err => console.log(err));
  });
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(6);
  if (imgs.length > 0) {
    imageMode(CENTER);
    image(imgs[0], windowWidth * 0.5, windowHeight * 0.3);
  }
}
