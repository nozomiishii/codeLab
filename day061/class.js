console.log("class.js");

class Beam {
  constructor(icon, x, y, angle){
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
  shoot(){
    text(this.icon, this.x, this.y);
    this.x += Math.sin(this.angle) ;
    this.y -= 3
    this.angle -= 0.01;
  }
}

class Zombie {
  constructor(icon, x, y, life){
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.life = life;
  }
  move(){
    text(this.icon, this.x, this.y);
    this.x += random(-5,5);
    this.y += 1
  }
}
