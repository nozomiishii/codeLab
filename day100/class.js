console.log('class.js is here');
// general settings 
const ww = window.innerWidth;
const wh = window.innerHeight;

// monsters class 
const monsters = [];
class Monster {
  constructor(img) {
    this.img = img;
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.size = 60;
  }
  show() {
    tint(this.r, this.g, this.b);
    image(this.img, this.x, this.y, this.size, this.size);
  }
  move() {
    if (this.x > ww || this.y > wh || this.x < 0 || this.y < 0) {
      this.speedX = -this.speedX;
      this.speedY = -this.speedY;
    }
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }
  hitBox(againstX, againstY) {

    // monster against beams 
    let dx = Math.abs(this.x - againstX);
    let dy = Math.abs(this.y - againstY);
    if (dx < this.size && dy < this.size) {
      if (this.size < 2) {
        console.log(monsters.indexOf(this));
        let index = monsters.indexOf(this);
        monsters.splice(index, 1);

        console.log(monsters.length);
      } else {
        this.size = 1;
        this.speedX += random(-1, 1);
        this.speedY += random(-1, 1);
        //   // chenge the background color when beam hit monsters
        if (!dead) {
          totalScore++

        }
      }
    }
  }
}

const beams = [];
class Beam {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = -3;
  }
  shoot() {
    stroke(6);
    fill(random(255));
    ellipse(this.x, this.y, 5, 20);
    this.y += this.speed;
  }
}

let player;
class Player {
  constructor(image) {
    this.image = image;
    this.x = ww / 2;
    this.y = wh / 2;
    this.size = 46;
  }
  show(x, y) {
    noTint();
    image(this.image, x, y - this.size, this.size, this.size);
  }
}
