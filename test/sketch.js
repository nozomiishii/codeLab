console.log('ready to sketch');

const api_key = "bd296703bc29461ffafa94fd3b01fcd3";
const api = "http://api.openweathermap.org/data/2.5/weather";

let url = api + `?q=Tokyo&APPID=${api_key}&units=metric`;

let animal;

const width = window.innerWidth;
const height = window.innerHeight;

function preload(){
  animal = loadJSON('animal.json');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function gotData(data){
  weatherData = data
  console.log(weatherData);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotData);
}

let giraffe;
let giraffeX = width / 2;
let giraffeY = height / 2;
let show = false;

let weatherData;
let weather;
let temperature;

function draw() {
  background(50, 140, 20);
  textAlign(CENTER, CENTER);
  fill(238);
  textSize(22);
  text("let's ask today's weather to him", width / 2, 100);
  textSize(48);
  giraffe = text(animal.giraffe, giraffeX, giraffeY);
  giraffeX += random(-1,1);
  giraffeY += random(-1,1);

  if(show){
    // text(weatherData.weather[0].main, 100, 100);
    // text(weatherData.weather[0].main, 100, 100);
  }
}

function mousePressed(){
  show = true;
}

