console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}


class Sweet {
  constructor(image, x, y){
    this.image = image;
    this.x = x;
    this.y = y;
  }
}
const sweets = [];
// const sweets = ['🧁','🍭','🍬','🍫','🍰','🍦','🍮','🍩','🎂'];

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text('ready!', windowWidth/2, windowHeight/2);
  for(i = 0; i < sweets.length; i++){
    text(sweets[i].image, sweets[i].x, sweets[i].y);
  }
}


function mouseDragged(){
  const sweetChoices = ['🧁','🍭','🍬','🍫','🍰','🍦','🍮','🍩','🎂'];
  let sweetImage = sweetChoices[floor(random(sweetChoices.length))];
  sweets.push(new Sweet(sweetImage, mouseX, mouseY));

}


