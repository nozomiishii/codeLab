const player = {
  icon: '👰'
};
let dead = false;
let beams = [];
let beam;

const zombieIcons = ["🧟‍♀️","🧟","🧟‍♂️"];
let zombies = [];
let zombie;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // btn = createButton('🍓');
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(128);
  // player
  textSize(48);
  text(player.icon, mouseX, mouseY);
  // princess is attacking
  for(beam of beams){
    beam.shoot();
  }
  // zombies comes out
  for(zombie of zombies){
    zombie.move();
  }
  // collision detection between beams and zombies
  for(beam of beams){
    for([index, zombie] of zombies.entries()){
      let d = dist(beam.x, beam.y, zombie.x, zombie.y);
      if(d < 24){
        zombies.splice(index, 1);
      }
      // if(d < 24){
      //   zombie.life--
      // }
      // if(zombie.life <= 0){
      //   zombies.splice(index, 1);
      // }
    }
  }

  // collision detection between zombies and player

  for(zombie of zombies){
    let d = dist(zombie.x, zombie.y, mouseX, mouseY);
    if(d < 24){
      player.icon = '🧟‍♀️';
      return dead = true;
    }
    if(dead){
      textAlign(CENTER, CENTER);
      textSize(48);
      fill(255);
      text('GAME OVER', windowWidth/2, windowHeight/2);
    }
  }

}

function mousePressed(){
  // princess is attacking
  beam = new Beam('🌷', mouseX, mouseY, random(-1, 1));
  beams.push(beam);
}
