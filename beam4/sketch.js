console.log('ready to sketch');

let backgroundColor = 236;
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
        random = Math.floor(Math.random() * json.data.length);
        img = loadImage(json.data[random].images.original.url);
        monsters.push(new Monster(img));
        // console.log(monsters);
      }, 100);
    })
    .catch(err => console.log(err));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createMonsters();
}

function draw() {
  background(backgroundColor);
  textSize(24);
  stroke(6);
  fill(totalScoreColorR, totalScoreColorG, totalScoreColorB);

  // controll player
  player.show();
  for (monster of monsters) {
    monster.show();
    monster.move();
  }

  // beams to balls
  for (beam of beams) {
    beam.shoot();
    for (let i = 0; i < monsters.length; i++) {
      monsters[i].hitBox(beam.x, beam.y);
    }

    // monsters to player
    // for (monster of monsters) {
    //   let d = dist(monster.x, monster.y, mouseX, mouseY)
    //   if (d < monster.r) {
    //     playerLife--
    //     console.log(playerLife);
    //   }
    //   if (playerLife < 0) {
    //     end.classList.add('ended');
    //     displayScore.innerHTML = `Your Score: ${totalScore}`;
    //     return dead = true;
    //   }
  }
}

function mousePressed() {
  beam = new Beam(
    mouseX,
    mouseY,
    -3
  );
  beams.push(beam);
}
