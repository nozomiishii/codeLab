// classes of desire 
const desires = [];
class Desire {
  constructor(img) {
    this.img = img;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.sizeX = random(80, 120);
    this.sizeY = random(80, 120);
  }
  show() {
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);
    this.x += random(-1, 1)
    this.y += random(-1, 1)
  }
  clicked() {
    let dx = Math.abs(this.x - mouseX);
    let dy = Math.abs(this.y - mouseY);
    if (dx < this.sizeX && dy < this.sizeY) {
      darkness += 5;
      heroSize -= 15;
      desires.splice(this, 1);
    }
  }
}
