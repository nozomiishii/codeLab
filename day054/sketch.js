console.log('ready to sketch');
function setup() {
  createCanvas(windowWidth, windowHeight);
}


class Sweet {
  constructor(image, x, y, fontSize){
    this.image = image;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
  }
}
const sweets = [];
// const sweets = ['🧁','🍭','🍬','🍫','🍰','🍦','🍮','🍩','🎂'];

function draw() {
  for(i = 0; i < sweets.length; i++){
    textSize(sweets[i].fontSize);
    text(sweets[i].image, sweets[i].x, sweets[i].y);
  }
}


function mouseDragged(){
    const sweetChoices = ['🧁','🍭','🍬','🍫','🍰','🍦','🍮','🍩','🎂'];
    let sweetImage = sweetChoices[floor(random(sweetChoices.length))];
    sweets.push(new Sweet(sweetImage, mouseX, mouseY, 40));
}


