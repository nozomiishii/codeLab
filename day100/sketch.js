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
let capture;

const end = document.querySelector('.end');
const displayScore = document.querySelector('.end p');


start.addEventListener('click', function () {
  op.classList.add('start');
  createMonsters();
});


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let monsterInterval;

let captures = [];
let num = 0

function createMonsters() {
  monsterInterval = setInterval(() => {
    captures.push(capture.get());

    monsters.push(new Monster(captures[num]));
    num++
  }, 1000);
}

function setup() {
  createCanvas(ww, wh);
  let constraints = {
    video: {
      mandatory: {
        maxWidth: 60,
        maxHeight: 60
      },
    },
    audio: false
  };
  capture = createCapture(constraints, () => console.log('capture ready.'));
  capture.elt.setAttribute('playsinline', '');
  // capture.hide();


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
        return dead = true;
      }
    }
  }

  if (dead) {
    background(238);
    textAlign(CENTER);
    textSize(16);
    fill(random(255), random(255), random(255))
    text('戦い疲れたら一休みだ', width / 2, height * .3)
    player.show(width / 2 - 30, height * .5)
    text(`Score:${totalScore}`, width / 2, height * .6);
  }
}

window.addEventListener('click', () => {
  console.log('shoot');
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
