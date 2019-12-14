console.log('class.js is here');

class Ball{
  constructor(x, y, r, colorR, colorG, colorB, alpha, speedX, speedY, times){
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.alpha = alpha;
    this.speedX = speedX;
    this.speedY = speedY;
    this.times = times;
  }
  show(){
    stroke(random(255),random(255),random(255));
    fill(this.colorR, this.colorG, this.colorB, this.alpha);
    ellipse(this.x, this.y, this.r * 2);
  }
  move(){
    if(this.x > width || this.y > height || this.x < 0 || this.y < 0){
      this.speedX = this.speedX * -1
      this.speedY = this.speedY * -1
    }
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }
  // backgroundColor(){
  //   background(this.colorR, this.colorG, this.colorB, this.alpha);
  // }
}

class Beam {
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  shoot(){
    stroke(6);
    fill(random(255));
    ellipse(this.x, this.y, 5, 20);
    this.y += this.speed;
  }
}

