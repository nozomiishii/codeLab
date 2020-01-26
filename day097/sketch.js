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
const hide = document.querySelector('.hide');
const displayScore = document.querySelector('.end p');

// let exploded = false;
const monstersApi = 'https://api.giphy.com/v1/gifs/search?&q=monster&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let monsterInterval;
let monsterImgs = [];

function createMonsters() {
  fetch(monstersApi)
    .then(response => response.json())
    .then(async json => {
      for (let i = 0; i < 10; i++) {
        img = await loadImage(json.data[i].images.original.url);
        monsterImgs.push(img);
      }
    })
    .catch(err => console.log(err));
}

function preload() {
  createMonsters();
}

let monsterCount = 0
start.addEventListener('click', function () {
  op.classList.add('start');
  monsterInterval = setInterval(() => {
    if (monsterCount == monsterImgs.length) {
      monsterCount = 0;
    }
    // console.log(monsterCount);
    // ! the null of delay is the reason why animation stops
    if (monsterImgs[monsterCount]['gifProperties']['delay'] > 0) {
      monsterImgs[monsterCount]["gifProperties"]["playing"] = false;
      monsters.push(new Monster(monsterImgs[monsterCount]));
    }
    monsterCount++
  }, 1000);
});



function setup() {
  createCanvas(ww, wh);

  let constrains = {
    video: {
      width: ww,
      height: wh
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
  if (player) {
    player.show(mouseX, mouseY);
  }

  if (monsters.length > 0) {
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
        clearInterval(monsterInterval);
        background(238);
        hide.classList.remove('hide');
        return dead = true;
      }
    }
  }

  if (dead) {
    background(238);
    textAlign(CENTER);
    textSize(16);
    text('DEAD', width / 2, height * .2)
    imageMode(CENTER);
    player.show(width / 2, height * .4)
    text(`Score:${totalScore}`, width / 2, height * .4);
  }
}



window.addEventListener('click', () => {
  beam = new Beam(
    mouseX,
    mouseY,
  );
  beams.push(beam);
});

window.addEventListener('touchstart', () => {
  console.log('shoot');
  beam = new Beam(
    mouseX,
    mouseY,
  );
  beams.push(beam);
});
