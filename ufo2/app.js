//check
console.log('app.js is here');

document.addEventListener('touchstart', function () {}, {
  passive: true
});
// window.addEventListener('touchmove', function (event) {
//   event.preventDefault();
// }, {
//   passive: false
// });


const myIcon = L.icon({
  iconUrl: 'ufo.png',
  iconSize: [38, 38],
  iconAnchor: [22, 94],
});

const mymap = L.map('mapid').setView([0, 0], 1);

const markers = [];

for (let i = 0; i < 10; i++) {
  let marker = L.marker([0, 0], {
    icon: myIcon
  }).addTo(mymap);
  markers.push(marker);
}



let randomLat;
let randomLng;
async function getdata() {

  for (let i = 0; i < markers.length; i++) {
    randomLat = Math.random() * 180 - 90;
    randomLng = Math.random() * 360 - 180;
    markers[i].setLatLng([randomLat, randomLng]);
  }
}

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 14
  }
).addTo(mymap);

setInterval(getdata, 2000);


// const form = document.getElementById('communicateBtn');

// form.addEventListener('submit', () => {
//   console.log(11);
// })
