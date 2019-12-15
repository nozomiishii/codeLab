console.log("class.js");

class Beam {
  constructor(icon, x, y){
    this.icon = icon;
    this.x = x;
    this.y = y;
  }
  shoot(){
    text(this.icon, this.x, this.y);
    this.y -= 3
  }
}

class Zombie {
  constructor(icon, x, y, life){
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.life = life;
  }
  shoot(){
    text(this.icon, this.x, this.y);
    this.y += 1
  }
}
