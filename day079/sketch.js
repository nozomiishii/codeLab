window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});
console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


const form = document.querySelector('#creatingAnimal');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.name.value) {
    db.collection('animals').add({
      name: form.name.value
    });
    form.name.value = "";
  }
})

function createAnimal() {
  // connecting to firebase
  db.collection('animals').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      // console.log(doc.data());
      animals.push(new Animal(change.doc.data().name));
    });
  });
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  createAnimal();
}

function draw() {
  background(136, 158, 130);
  textAlign(CENTER);
  if (animals.length > 0) {
    for (let i = 0; i < animals.length; i++) {
      animals[i].show();
      animals[i].move();
    }
  }
}
