console.log("class.js");
const width = window.innerWidth;
const height = window.innerHeight;

const player = {
  image: '🦉',
  x: width * 0.2,
  y: 0,
  show(){
    textAlign(CENTER);
    textSize(60);
    text(this.image, this.x, this.y);
    player.y++;
  }
}

class Wood {
  constructor(x, y, h){
    this.x = x;
    this.y = y;
    this.h= h;
  }
  show(){
    for(let i = 0; i < 6; i++){
      noStroke();
      ellipse(this.x, this.y + i * 10, this.h);
    }
    this.x--;
  }
}
