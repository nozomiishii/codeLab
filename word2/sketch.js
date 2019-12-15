const player = {
  icon: '👰'
};
let beams = [];
let beam;
const zombies = ["🧟‍♀️","🧟","🧟‍♂️"];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 140, 0);
  textSize(48);
  fill(238);
  text(player.icon, mouseX, mouseY);
  for(beam of beams){
    beam.shoot();
  }
}

function mousePressed(){
  beam = new Beam('🌷', mouseX, mouseY);
  beams.push(beam);
}
