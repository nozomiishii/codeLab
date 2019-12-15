console.log('class.js');

class Word {
  constructor(text, x, y, shakeX, shakeY, fontSize){
    this.text = text;
    this.x = x;
    this.y = y;
    this.shakeX = shakeX;
    this.shakeY = shakeY;
    this.fontSize = fontSize;
  }
  show(){
    stroke(248);
    fill(6);
    textSize(this.fontSize);
    text(this.text, this.x, this.y);
  }
  move(){
    if(this.x + this.fontSize > width
      || this.x - this.fontSize　< 0){
      this.shakeX = -this.shakeX
    }
    if(this.y + this.fontSize > height
      || this.y - this.fontSize　< 0){
      this.shakeY = -this.shakeY
    }


    // this.x += random(-this.shakeX, this.shakeX);
    // this.y += random(-this.shakeY, this.shakeY);
    this.x += this.shakeX;
    this.y += this.shakeY;
  }
}
