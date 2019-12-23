console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let humans = [];
let powers = [];
let charged = false;
let backgroundColor = 59;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(createHuman, 1000);
}

function createHuman(){
  if(humans.length < 15){
  　humans.push(new Human());
  }
}

let bullets = [];
function draw() {
  background(backgroundColor);

  // shoot bullets
  for(bullet of bullets){
    bullet.shoot();
  }

  // player

  player.show();
  honeyTrap.show();

  // human appares
  for(human of humans){
    human.show();
  }

  // judgement
  for(bullet of bullets){
    for([index, human] of humans.entries()){
      let d = dist(human.x, human.y, bullet.x ,bullet.y);
      if(d < human.size /2 + bullet.size/2 && bullet.image == "🦸🏻‍♀️"){
        human.image = "🏩";
        human.speed = 0;
      } else if(d < human.size /2 + bullet.size/2){
        human.image = "🙇🏻‍♂️";
        human.y = bullet.y;
        if(human.y < 0){
          powers.push(human);
          humans.splice(index, 1);
        }
      }
    }
  }
  if(powermeter.value >= 100){
    if(!powermeter.classList.contains('full')){
      powermeter.classList.add('full');
      return charged = true;
    }
  }else{
    powermeter.value = powers.length * 10 + 1;
    return powermeter.value;
  }
}

function mousePressed(){
  let d = dist(mouseX, mouseY, honeyTrap.x, honeyTrap.y);
  if(d < 50){
    bullets.push(new Bullet("🦸🏻‍♀️", 60, random(width)));
  } else if(charged){
    backgroundColor = 238;
    bullets.push(new Bullet("💸", 100, mouseX));
  } else {
    bullets.push(new Bullet("💴", 44, mouseX));
  }
}
















