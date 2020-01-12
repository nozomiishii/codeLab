//check
console.log('app.js is here');
let locationBox = document.querySelector('.location');
let lat;
let lng;
let map;

function geolocation(lat, lng) {
  map = L.map('map').setView([lat, lng], 16);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 20
    }
  ).addTo(map);
  //マーカー表示の記述
  L.marker([lat, lng]).addTo(map)
    .bindPopup('🤵🏻:ここいます？')
    .openPopup();
}

function accessGeolocation() {
  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log('yay')
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      geolocation(lat, lng);
    });
  } else {
    /* geolocation IS NOT available */
    console.error('not available');
  }
}
const start = document.getElementById('start');
const op = document.querySelector('.op');
const hide = document.querySelector('.hide');
const btn = document.querySelector('#btn');

let permission = false;
// btn.addEventListener('click', () => {
//   if (!permission) {
//     accessGeolocation();
//   } else {
//     console.log('thanks');
//   }
// });

accessGeolocation();
start.addEventListener('click', function () {
  op.classList.add('start');
  hide.classList.remove('hide');
});

const statusBtn = document.querySelector('#status-check');
const btnBox = document.querySelector('.btn-box');



function statusPermission() {
  navigator.permissions.query({
      name: 'geolocation'
    })
    .then((result) => {
      if (result.state == 'granted') {
        btnBox.style.background = "green"
      } else if (result.state == 'prompt') {
        btnBox.style.background = "yellow"
      } else if (result.state == 'denied') {
        btnBox.style.background = "red"
      }
      console.log(result.state);
      result.onchange = () => {
        console.log('changed the permissions');
      }
    });
}
statusBtn.onclick = function () {
  statusPermission();
}
