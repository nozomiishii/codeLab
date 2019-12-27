console.log('ready to sketch');

const api = 'https://api.giphy.com/v1/gifs/search?';
const apiKey = '&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';
let query = "&q=rainbow"
const wordInput = document.getElementById('wordInput');
const btn = document.querySelector('.btn');
const imgs = document.querySelectorAll('img');
let load = false;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function searchGiphies(){
  console.log('click');
  query = `&q=${wordInput.value}`;
  console.log(query);
  if(query){
    url = api + query + apiKey;
    console.log(url);
    let images = [];
    loadJSON(url, gotData);
  }
}

let x;
let y;
let images = [];
let time = 500
function gotData(giphy){
  for(let i = 0; i < 2; i++){
    x = random(width);
    y = random(height);
    image = createImg(giphy.data[i].images.original.url);
    images.push(image);
  } 
  setInterval(() => {
    for(let i = 0; i < images.length; i++){
      x = random(width);
      y = random(height);
      images[i].style("transform", `translate(${x}%, ${y}%)`);
    }
  }, time);
}
 

function setup() {
  noCanvas();
  wordInput.addEventListener('change', searchGiphies);
}

function draw() {
  background(255, 140, 0);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('ready!', windowWidth/2, windowHeight/2);
  ellipseMode(CENTER);
  ellipse(windowWidth/2, windowHeight/2 + 90, random(40), random(40));
}

