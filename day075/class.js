// general setting 
const ww = window.innerWidth;
const wh = window.innerHeight;

// classes of desire 
const desires = [];
class Desire {
  constructor(img) {
    this.img = img;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.sizeX = random(80, 120);
    this.sizeY = random(80, 120);
  }
  show() {
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);
    this.x += this.speedX
    this.y += this.speedY
  }
  approached() {
    // square hitbox
    let dx = Math.abs(this.x - mouseX);
    let dy = Math.abs(this.y - mouseY);
    if (dx < this.sizeX) {
      this.speedX = this.speedX * -1.1;
    }
    if (dy < this.sizeY) {
      this.speedY = this.speedY * -1.1;
    }
    if (this.x > ww || this.x < 0 || this.y > wh || this.y < 0) {
      desires.splice(this, 1);
    }
  }
}

// setting of hero 
const hero = {
  icon: "🦸🏻‍♂️",
  size: 48,
  x: ww / 2,
  y: wh / 2,
  show() {
    textAlign(CENTER);
    textSize(hero.size);
    text(hero.icon, hero.x, hero.y);
    if (mouseX || mouseY) {
      hero.x = mouseX;
      hero.y = mouseY;
    }

    //  else {
    //   background(255);
    //   textSize(92);
    //   text('👶🏻', windowWidth / 2, windowHeight * 0.4);
    //   textSize(48);
    //   fill(51, 153, 255);
    //   text('清らかだなあ', windowWidth / 2, windowHeight * 0.6);
    // }
  }
};
