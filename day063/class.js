console.log("class.js");

class Thunder{
　constructor(x, y){
    this.x = x;
    this.y = y;
    this.history = [];
  }
  show(){
    // rect(this.x, this.y, random(10, 20), random(10, 20));
    beginShape();
    for(let i = 0; i < this.history.length; i++){
      stroke(random(255), random(255), random(255), random(255));
      fill(random(255), random(255), random(255), random(255));
      let position = this.history[i];
      vertex(position.x, position.y);
    }
    endShape();

    // for(let i = 0; i < this.history.length; i++){
    //   fill(random(255), random(255), random(255), random(255));
    //   let position = this.history[i];
    //   rect(position.x, position.y, random(50), random(50))
    // }

  }
  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    for(let i = 0; i < this.history.length; i++){
      this.history[i].x += random(-20, 20);
      this.history[i].y += random(-20, 20);
    }
    let v = createVector(this.x, this.y);
    this.history.push(v);
    // if (this.history.length > 30){
    //   this.history.splice(0,1);
    // }
  }
}
