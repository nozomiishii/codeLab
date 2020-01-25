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

function getImgData(json) {
  monsterInterval = setInterval(async () => {

    randomImg = Math.floor(Math.random() * json.data.length);
    img = await loadImage(json.data[randomImg].images.original.url);
    await img.loadPixels();
    // console.log(typeof img);
    // if (typeof img == "ImageData") {
    // }
    // console.log(monsters);
    // console.log(img);
    console.log(json);
    // console.log(json.data[randomImg]);

    await monsters.push(new Monster(img));
  }, 2000);

}

function createMonsters() {
  fetch(monstersApi)
    .then(response => response.json())
    .then(json => {
      getImgData(json);
    })
    .catch(err => console.log(err));
}

start.addEventListener('click', function () {
  op.classList.add('start');
  createMonsters();
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
        return dead = true;
      }
    }
  }

  if (dead) {
    background(238);
    textAlign(CENTER);
    textSize(16);
    text('DEAD', width / 2, height * .3)
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
