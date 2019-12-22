console.log("class.js");

const height = window.innerHeight;
let p;
const player = {
　icon: '👾',
  y: height * 0.9,
  speed: 0,
  show(){
    textSize(48);
    text(player.icon, mouseX, player.y);
    this.y += random(-1,1);
  }
}

class Bullet {
  constructor(){
    this.image = "💴";
    this.x = mouseX;
    this.y = player.y;
    this.size = 44;
  }
  shoot(){
    textSize(this.size);
    text(this.image,this.x, this.y, this.size, this.size);
    this.y -= 3;
  }
}
