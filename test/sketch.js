console.log('ready to sketch');

const API_KEY = "bd296703bc29461ffafa94fd3b01fcd3";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

let url = BASE_URL + `?q=tokyo,jp&APPID=${API_KEY}&units=metric`;

let weather;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function gotData(data){
  weather = data
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotData);
}



function draw() {
  background(255, 140, 0);
  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  if(weather){
    console.log(weather.main.humidoty)
    // text(weatherData.main, 100, 100);
  }

}

