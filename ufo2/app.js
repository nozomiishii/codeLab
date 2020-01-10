//check
console.log('app.js is here');

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


db.collection('messages').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    renderMessages(change.doc);
  });
});

const messages = [];

function renderMessages(doc) {
  message = doc.data().message
  messages.push(message);
}


const form = document.querySelector('#message-form');
const reply = document.querySelector('.reply');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.message.value) {
    db.collection('messages').add({
      message: form.message.value
    });
    form.message.value = "";
  }
  let randomMessage = Math.floor(Math.random() * messages.length);
  reply.innerHTML = messages[randomMessage];
  setTimeout(() => {
    reply.innerHTML = ""
  }, 1000)
})
