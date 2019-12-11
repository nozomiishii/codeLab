console.log('ready to sketch');

class Ball{
  constructor(x, y, r, colorR, colorG, colorB, alpha, speedX, speedY){
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.alpha = alpha;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  show(){
    fill(6);
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
}

let balls = [];
let ball;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(
    random(width),
    random(height ),
    random(46),
    random(255), //colorR
    random(255), //colorG
    random(255), //colorB
    random(255), //alpha
    random(-1,1), //speedX
    random(-1,1) //speedY
    );
  balls.push(ball);
}


// function mousePressed(){
//   ball = new Ball(
//     mouseX,
//     mouseY,
//     random(46),
//     random(255), //colorR
//     random(255), //colorG
//     random(255), //colorB
//     random(255), //alpha
//     random(-1,1), //speedX
//     random(-1,1) //speedY
//     );
//   balls.push(ball);
// }

function draw() {
  background(220);
  for(ball of balls){
    ball.show();
    ball.move();
  }
}
