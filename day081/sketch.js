console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createAnimal() {
  // connecting to firebase
  db.collection('animals').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      // console.log(doc.data());
      animals.push(new Animal(change.doc.data().name, change.doc.data().icon));
    });
  });
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  createAnimal();
}

let green = 158;
let blue = 130;

function draw() {
  background(136, green, blue);
  textAlign(CENTER);
  if (animals.length > 0) {
    for (let i = 0; i < animals.length; i++) {
      animals[i].show();
      animals[i].move();
    }
  }
  ningen.show();
  ningen.safari();
}
