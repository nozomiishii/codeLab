console.log("class.js");

class Beam {
  constructor(icon, x, y,){
    this.icon = icon;
    this.x = x;
    this.y = y;
  }
  shoot(){
    text(this.icon, this.x, this.y);
    this.y -= 3
  }
}
