console.log("class.js");

const height = window.innerHeight;
const width = window.innerWidth;
const powermeter = document.querySelector('.powermeter');

const honeyTrap = {
  icon: '🦸🏻‍♀️',
  x: width - 50,
  y: height * 0.8,
  show(){
    textSize(48);
    text(honeyTrap.icon, honeyTrap.x, honeyTrap.y);
    this.y += random(-1,1);
  }
}

const player = {
　icon: '👾',
  y: height * 0.9,
  speed: 0,
  show(){
    textSize(48);
    if(height < 820){
      player.y = height * 0.7;
    }
    text(player.icon, mouseX, player.y);
    this.y += random(-1,1);
  }
}

class Bullet {
  constructor(image, size, x){
    this.image = image;
    this.x = x;
    this.y = player.y;
    this.size = size;
  }
  shoot(){
    textSize(this.size);
    text(this.image,this.x, this.y, this.size, this.size);
    this.y -= 3;
  }
}

class Human {
  constructor(){
    this.image = "🦸🏻‍♂️";
    this.x = random(width);
    this.y = 0;
    this.size = 46;
    this.speed = 1;
  }
  show(){
    textSize(this.size);
    text(this.image,this.x, this.y, this.size, this.size);
    this.y += this.speed;
  }
}
