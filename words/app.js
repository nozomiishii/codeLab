//check
console.log('app.js is here');

// write game code from here
window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});

// creating new apps 

// connecting to firebase
db.collection('animals').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    // console.log(doc.data());
    renderAnimal(doc);
  });
});

const animalList = document.querySelector('#animalList');

function renderAnimal(doc) {
  let li = document.createElement('li');
  li.setAttribute('data-id', doc.id);
  li.innerHTML = `
  <h1 class="animal-icon">${doc.data().animal}</h1>
  <p>${doc.data().name}</p>
  `;
  animalList.appendChild(li);
}
