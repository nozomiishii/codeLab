const player = {
  icon: '👰'
};
let beams = [];
let beam;

const zombieIcons = ["🧟‍♀️","🧟","🧟‍♂️"];
let zombies = [];
let zombie;
function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(function(){
    let randomZombieIcon = Math.floor(Math.random() * zombieIcons.length);
    zombie = new Zombie(
      zombieIcons[randomZombieIcon],
      random(width),
      0,
      random(1,5)
      );
    zombies.push(zombie);
  },4000);
}

function draw() {
  background(255, 140, 0);
  // player
  textSize(48);
  text(player.icon, mouseX, mouseY);
  // princess is attacking
  for(beam of beams){
    beam.shoot();
  }
  // zombies comes out
  for(zombie of zombies){
    zombie.shoot();
  }
  // collision detection
  for(beam of beams){
    for([index, zombie] of zombies.entries()){
      let d = dist(beam.x, beam.y, zombie.x, zombie.y);
      if(d <  20){
        zombies.splice(index, 1);
      }
    }
  }

}

function mousePressed(){
  // princess is attacking
  beam = new Beam('🌷', mouseX, mouseY);
  beams.push(beam);
}
