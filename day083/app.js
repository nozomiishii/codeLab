//check
console.log('app.js is here');

// write game code from here
window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});





const myIcon = L.icon({
  iconUrl: 'ufo.png',
  iconSize: [38, 38],
  iconAnchor: [22, 94],


});

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
const mymap = L.map('mapid').setView([0, 0], 1);
const marker = L.marker([0, 0], {
  icon: myIcon
}).addTo(mymap);


let randomLat;
let randomLng;
async function getdata() {
  // const response = await fetch(api_url);
  // const data = await response.json();
  // const {
  //   latitude,
  //   longitude
  // } = data;


  randomLat = Math.random() * 90;
  randomLng = Math.random() * 180;
  marker.setLatLng([randomLat, randomLng])

}

L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 14
  }
).addTo(mymap);

setInterval(getdata, 2000);
