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

const ningen = {
  icon: "🧍🏻‍♂️",
  size: 56,
  show() {
    textSize(ningen.size)
    text(ningen.icon, mouseX, mouseY)
  },
  safari() {
    for (let i = 0; i < animals.length; i++) {
      let dx = Math.abs(animals[i].x - mouseX);
      let dy = Math.abs(animals[i].y - mouseY);
      if (dx < ningen.size && dy < ningen.size) {
        animals.splice(i, 1);
      }
    }
  }
}
