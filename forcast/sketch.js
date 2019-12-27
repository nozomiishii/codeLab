console.log('ready to sketch');
let weatherData;

let temperature;

const cities = document.getElementById('cities');
let city = "tokyo";

const api = "https://api.openweathermap.org/data/2.5/weather?q=";

const api_key = "&APPID=bd296703bc29461ffafa94fd3b01fcd3";
const units = "&units=metric";


let animal;
let icon;
let image;
const width = window.innerWidth;
const height = window.innerHeight;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload(){
  animal = loadJSON('animal.json');
  city = cities.value;
  url = api + city + api_key + units;
  loadJSON(url, gotData);

}

function gotData(data){
  weatherData = data;
  icon = weatherData.weather[0].icon;
  image = loadImage(`https://openweathermap.org/img/wn/${icon}@2x.png`);
  console.log(image);
}

function weatherAsk(){
  city = cities.value;
  url = api + city + api_key + units;
  loadJSON(url, gotData);



  show = true;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let btn = select('#submit');
  btn.mousePressed(weatherAsk);
  


}

let giraffe;
let giraffeX = width / 2;
let giraffeY = height / 2;
let show = false;


function draw() {
  background(50, 140, 20);
  textAlign(CENTER, CENTER);
  fill(238);
  textSize(22);
  text("Let's ask today's weather to him", width / 2, height * 0.2);
  textSize(48);
  giraffe = text(animal.giraffe, giraffeX, giraffeY);
  giraffeX += random(-1,1);
  giraffeY += random(-1,1);

  if(show){
    
    text(weatherData.weather[0].main, width / 2, height * 0.8);
    // p = createP('',width / 2, height * 0.9);
    text(image, width / 2, height * 0.9);

    
    // p.style('width', "100px");
    // p.style('height', "100px");
    // p.style("background", `url(http://openweathermap.org/img/wn/${icon}@2x.png)`);
    // text(weatherData.weather[0].icon, width / 2, height * 0.8);
    // text(weatherData.weather[0].main, 100, 100);
  }
}

