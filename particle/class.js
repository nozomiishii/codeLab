function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(4, 32);
  this.speedX = random(-1, 1);
  this.speedY = random(-1, 1);

  this.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };

  this.show = function () {
    noStroke();

    ellipse(this.x, this.y, this.r, this.r);
  };
}
