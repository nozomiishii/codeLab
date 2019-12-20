console.log("class.js");
const width = window.innerWidth;
const height = window.innerHeight;
let playerIcon;

class Player {
  constructor(image, x, y){
    this.image = image;
    this.x = x;
    this.y = y;
  }
  show(){
    if(playerIcon){
      playerIcon.remove();
    }
    if(!dead){
      playerIcon = createP(this.image);
      playerIcon.position(this.x, this.y);
      playerIcon.class('playerIcon');
      this.y++;
    }
  }
}

class Wood {
  constructor(x, y, h){
    this.x = x;
    this.y = y;
    this.h= h;
  }
  show(){
    for(let i = 0; i < 3; i++){
      noStroke();
      ellipse(this.x, this.y + i * 30, this.h);
    }
    this.x--;
  }
}
