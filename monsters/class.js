class Monster {
  constructor(img) {
    this.img = img;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.sizeX = random(20, 80);
    this.sizeY = random(20, 80);
  }
  show() {
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);
  }
}
