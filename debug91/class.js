console.log("class.js");

const photos = [];
class Photo {
  constructor(img) {
    this.img = img;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.size = random(38, 62);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }
  show() {
    image(this.img, this.x, this.y, this.size, this.size);
  }
  move() {
    if (this.x < 0 || this.x > windowWidth - this.size) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > windowHeight - this.size) {
      this.speedY = -this.speedY;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
