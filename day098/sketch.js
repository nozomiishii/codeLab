console.log('ready to sketch');

//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');


let backgroundColor = 6;
let backgroundColorRate = 50;
let totalScore = 0;
let totalScoreColorR = 238;
let totalScoreColorG = 238;
let totalScoreColorB = 238;
let dead = false;
let creatingBalls;
let playerLife = 3;
let capture;

const end = document.querySelector('.end');
const displayScore = document.querySelector('.end p');

// let exploded = false;
const monstersApi = 'https://api.giphy.com/v1/gifs/search?&q=monster&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let monsterInterval;

function createMonsters() {
  fetch(monstersApi)
    .then(response => response.json())
    .then(json => {
      monsterInterval = setInterval(() => {
        randomImg = Math.floor(Math.random() * json.data.length);
        img = loadImage(json.data[randomImg].images.original.url);
        console.log(img);
        console.log(json.data[randomImg]);
        monsters.push(new Monster(img));
        // console.log(monsters);
      }, 1000);
    })
    .catch(err => console.log(err));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createMonsters();

  let constrains = {
    video: {
      width: 46,
      height: 46
    }
  }
  capture = createCapture(constrains, () => console.log('capture ready.'));
  capture.elt.setAttribute('playsinline', '');
  capture.hide();

  player = new Player(capture);

}



function draw() {
  background(backgroundColor);
  textSize(24);
  stroke(6);
  fill(totalScoreColorR, totalScoreColorG, totalScoreColorB);

  text(`Score:${totalScore}`, 20, 50);

  // controll player

  player.show(mouseX, mouseY);

  for (monster of monsters) {
    monster.show();
    monster.move();
  }

  // beams to balls

  for (let i = 0; i < beams.length; i++) {
    beams[i].shoot(random(255));

    for (let k = 0; k < monsters.length; k++) {
      monsters[k].hitBox(beams[i].x, beams[i].y);
    }
  }

  // monsters to player
  for (monster of monsters) {
    let dx = Math.abs(monster.x - mouseX);
    let dy = Math.abs(monster.y - mouseY);
    if (dx < monster.size && dy < monster.size) {
      //   playerLife--
      //   console.log(playerLife);
      // }
      // if (playerLife < 0) {
      // end.classList.add('ended');
      // let playerIcon = document.querySelector('.end h1');
      // let playerIcon = document.querySelector('.end img');

      // capture.loadPixels();
      // const image64 = capture.canvas.toDataURL();
      // img = loadImage()
      // playerIcon.srcObject = img;


      // displayScore.innerHTML = `Your Score: ${totalScore}`;

      clearInterval(monsterInterval);
      background(238);
      return dead = true;
    }
  }

  if (dead) {
    background(238);
    textAlign(CENTER);
    textSize(16);
    text('DEAD', width / 2, height * .4)
    imageMode(CENTER);
    player.show(width / 2, height * .5)
    text(`Score:${totalScore}`, width / 2, height * .6);

  }
}

function mousePressed() {
  beam = new Beam(
    mouseX,
    mouseY,
  );
  beams.push(beam);
}
