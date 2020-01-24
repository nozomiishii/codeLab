console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const icon = L.icon({
  iconUrl: 'player.png',

  iconSize: [32, 32], // アイコンのサイズ
  iconAnchor: [16, 52], // マーカーの位置に対応するアイコンの位置
  popupAnchor: [0, -55] // ポップアップを開く基準
});

function geolocation(lat, lng) {
  map = L.map('map').setView([lat, lng], 16);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      attribution: 'Map tiles by <a href="http://stamen.com" rel="nofollow noopener" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" rel="nofollow noopener" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" rel="nofollow noopener" target="_blank">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0" rel="nofollow noopener" target="_blank">CC BY SA</a>.',
      maxZoom: 20
    }
  ).addTo(map);

  L.marker([lat, lng], {
      icon: icon
    }).addTo(map)
    .bindPopup('さあ、冒険だ')
    .openPopup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      geolocation(lat, lng);
    });
    console.log('yay');
  } else {
    console.log("boo");
  }

}

function drow() {
  L.marker([mouseX, mouseX], {
      icon: icon
    }).addTo(map)
    .bindPopup('さあ、冒険だ')
    .openPopup();
}
