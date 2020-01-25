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

// let exploded = false;
const monstersApi = 'https://api.giphy.com/v1/gifs/search?&q=monster&api_key=2yzS5m3m1CWprh70TzZdDVjCqXRS3Qrz';



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let monsterInterval;


function createMonsters() {
  let constrains = {
    video: {
      width: 46,
      height: 46
    }
  }
  capture2 = createCapture(constrains, () => console.log('capture ready.'));
  capture2.elt.setAttribute('playsinline', '');
  capture2.hide();
  monsterInterval = setInterval(() => {
    capture2.loadPixels();
    const image64 = capture2.canvas.toDataURL();
    img = loadImage(image64);
    // capture.updatePixels();
    monsters.push(new Monster(img));
    // console.log(monsters);
  }, 2000);

}

function setup() {
  createCanvas(ww, wh);

  let constrains = {
    video: {
      width: ww / 2,
      height: wh / 2
    }
  }


  capture = createCapture(constrains, () => console.log('capture ready.'));
  capture.elt.setAttribute('playsinline', '');
  capture.hide();

  player = new Player(capture);

  createMonsters();
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
