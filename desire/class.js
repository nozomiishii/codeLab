// classes of desire 

class Desire {
  constructor(img) {
    this.img = img;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.sizeX = random(20, 40);
    this.sizeY = random(20, 40);
  }
  show() {
    image(this.img, this.x, this.y, this.sizeX * 2, this.sizeY * 2);
  }
}
