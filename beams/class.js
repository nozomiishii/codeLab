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
    this.size = 60;
  }
  show() {
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
    let dx = Math.abs(this.x - againstX);
    let dy = Math.abs(this.y - againstY);

    if (dx < this.x) {
      this.x = -this.x;
    }
    if (dy < this.y) {
      this.y = -this.y;
    }
    // let d = dist(this.x, this.y, againstX, againstY);
    // if (d < 50) {

    //   monster.speedX += random(-1, 1);
    //   monster.speedY += random(-1, 1);
    //   // monster.r++
    //   // monster.times++
    //   // totalScoreColorR = random(255);
    //   // totalScoreColorG = random(255);
    //   // totalScoreColorB = random(255);
    //   // if (!dead) {
    //   //   totalScore++
    //   // }
    // }
    if (monsters.size < 0) {
      // explode when monsters are attacked over 60 times
      monsters.splice(i, 1);

      // chenge the background color when beam hit monsters
      setTimeout(function () {
        if (backgroundColor <= 0 || backgroundColor >= 255) {
          backgroundColorRate = backgroundColorRate * -1;
        }
        backgroundColor -= backgroundColorRate;
      }, 1000);
    }
  }
}

const beams = [];
class Beam {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}

const player = {
  image: '👨🏻‍🚀',
  x: ww / 2,
  y: wh / 2,
  life: 3,
  show() {
    this.x = mouseX;
    this.y = mouseY;
    textSize(46);
    text(this.image, this.x, this.y);
  }
}
