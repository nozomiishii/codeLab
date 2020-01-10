//check
console.log('app.js is here');

// write game code from here
// window.addEventListener('touchmove', function (event) {
//   event.preventDefault();
// }, {
//   passive: false
// });


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

// async function getdata() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   const {
//     latitude,
//     longtitude
//   } = data;

//   document.getElementById('map').innerHTML += `
//     <p>${latitude}</p>
//     `

// }



const mymap = L.map('mapid').setView([0, 0], 1);

L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 14
  }
).addTo(mymap);

// getdata();
