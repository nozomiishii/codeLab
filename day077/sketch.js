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

const end = document.querySelector('.end');
const displayScore = document.querySelector('.end p');

// let exploded = false;
const monstersApi = 'https://api.giphy.com/v1/gifs/search?&q=monster&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createMonsters() {
  fetch(monstersApi)
    .then(response => response.json())
    .then(json => {
      setInterval(() => {
        randomImg = Math.floor(Math.random() * json.data.length);
        img = loadImage(json.data[randomImg].images.original.url);
        monsters.push(new Monster(img));
        // console.log(monsters);
      }, 500);
    })
    .catch(err => console.log(err));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  start.addEventListener('click', function () {
    op.classList.add('start');
    createMonsters();
  });
}

function draw() {
  background(backgroundColor);
  textSize(24);
  stroke(6);
  fill(totalScoreColorR, totalScoreColorG, totalScoreColorB);

  text(`Score:${totalScore}`, 20, 50);

  // controll player
  player.show();

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
      end.classList.add('ended');
      displayScore.innerHTML = `Your Score: ${totalScore}`;
      return dead = true;
    }
  }
}

function mousePressed() {
  beam = new Beam(
    mouseX,
    mouseY,
  );
  beams.push(beam);
}
