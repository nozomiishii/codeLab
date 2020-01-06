console.log("class.js");

const animals = [];
class Animal {
  constructor(name, icon) {
    this.icon = icon;
    this.name = name;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
  }
  show() {
    textSize(48);
    text(this.icon, this.x, this.y);
    textSize(18);
    text(this.name, this.x, this.y + 30);
  }
  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
