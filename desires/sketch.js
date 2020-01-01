console.log('ready to sketch');
// sketch of desire 
// api 
const api = 'https://api.giphy.com/v1/gifs/search?';
const apiKay = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = '&q=boobs';

// setting 
const start = document.getElementById('start');
const op = document.querySelector('.op');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// create new desire
function desire() {
  url = api + query + apiKay;
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      setInterval(() => {
        randomDesire = Math.floor(Math.random() * json.data.length);
        img = loadImage(json.data[randomDesire].images.original.url);
        desires.push(new Desire(img));
        // console.log(desires);
      }, 1000);
    })
    .catch(err => console.log(err));
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts
  // start.addEventListener('click', function () {
  // op.classList.add('start');

  // get images of desire from api 
  desire();
  // });
}


// hero setting 
// let hero;
// let heroY = window.innerHeight / 2 + 100;
// let heroSize = 68;
let darkness = 6;

function draw() {
  background(darkness);
  hero.show();

  // desires show 
  for (let i = 0; i < desires.length; i++) {
    desires[i].show();
  }

  // event 
  for (let i = 0; i < desires.length; i++) {
    desires[i].approached();
  }
}
