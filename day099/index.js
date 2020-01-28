console.log('index');

const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalSignup = document.getElementById('modal-signup');
const modalLogin = document.getElementById('modal-login');
const modalAccount = document.getElementById('modal-account');

for (modalTrigger of modalTriggers) {
  modalTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    switch (e.target.dataset['target']) {
      case "modal-login":
        console.log('modal-login');
        modalLogin.style.display = "block";
        break;
      case "modal-signup":
        console.log("modal-signup");
        modalSignup.style.display = "block";
        break;
      case "modal-account":
        console.log("modal-account");
        modalAccount.style.display = "block";
        break;
      default:
        console.log("doesn't work");
    }
  });
}


const main = document.getElementById('main');
const info = document.getElementById('info');
const lbc = document.getElementById('lbc');
const best = document.getElementById('best');

function geolocation(lat, lng) {
  lbc.innerHTML = `<div id="map"></div>`
  map = L.map('map').setView([lat, lng], 16);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 20
    }
  ).addTo(map);

  L.marker([lat, lng]).addTo(map)
    .bindPopup('🐞')
    .openPopup();
}

const setupMessages = (data) => {
  if (data.length) {
    let lat, lng;
    let infoContent = "";
    let bestContent = "";

    console.log(data);
    data.forEach(doc => {
      const divInfo = `
       <div class="message-style">
        <h2>${doc.data().message1}</h2>
        <h2>${doc.data().message2}</h2>
       <div>
      `
      infoContent += divInfo;

      lat = doc.data().lat;
      lng = doc.data().lng;

      const divBest = `
        <div class="message-style">
         <h2>${doc.data().message3}</h2>
         <h2>${doc.data().icon}</h2>
        <div>
       `
      bestContent += divBest;
    });
    info.innerHTML = infoContent;
    best.innerHTML = bestContent;
    geolocation(lat, lng);
  } else {
    main.innerHTML = '<h5 class="needLogin">Login is a must to see it.</h5>'
  }
}

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-In');

const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}
