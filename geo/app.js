//check
const start = document.getElementById('start');
const op = document.querySelector('.op');
const hide = document.querySelector('.hide');

// start.addEventListener('click', function () {
//   op.classList.add('start');
//   hide.classList.memove('hide');
// });


console.log('app.js is here');
let locationBox = document.querySelector('.location');
let lat;
let lng;
let map;

if ("geolocation" in navigator) {
  /* geolocation is available */
  console.log('yay')
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    map = L.map('map').setView([lat, lng], 16);

    console.log(position);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 20
      }
    ).addTo(map);
    //マーカー表示の記述
    L.marker([lat, lng]).addTo(map)
      .bindPopup('ここにいます')
      .openPopup();
  });
} else {
  /* geolocation IS NOT available */
}
