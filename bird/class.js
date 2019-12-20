console.log("class.js");
const width = window.innerWidth;
const height = window.innerHeight;

const player = {
  image: '🦉',
  x: width * 0.2,
  y: 0,
  show(){
    text(this.image, this.x, this.y);
    player.y++;
  }
}

class Wood {
  constructor(x){
    this.x = x;
    // this.y = y;
    // this.h= h;
  }
  show(){
    rect(this.x, 0, 50, 200);
    rect(this.x, height, 50, -200);
    this.x--;
  }
}
