console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let humans = [];
let powers = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(createHuman, 2000);
}

function createHuman(){
  humans.push(new Human());
}

let bullets = [];
function draw() {
  background(59);
  player.show();

  // shoot bullets
  for(bullet of bullets){
    bullet.shoot();
  }

  // human appares
  for(human of humans){
    human.show();
  }

  // judgement
  for(bullet of bullets){
    for([index, human] of humans.entries()){
      let d = dist(human.x, human.y, bullet.x ,bullet.y);
      if(d < human.size /2 + bullet.size/2){
        human.image = "🙇🏻‍♂️";
        human.y = bullet.y;
        if(human.y < 0){
          powers.push(human);
          humans.splice(index, 1);
        }
      }
    }
  }
  if(powermeter.value > 100){
    console.log('!');
    // progress.class('full');
  }else{
    powermeter.value = powers.length * 10 + 10;
  }
}

function mouseClicked(){
  bullets.push(new Bullet());
}
