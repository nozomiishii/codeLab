console.log("class.js");
const width = window.innerWidth;
const height = window.innerHeight;

class Tree {
  constructor(){
    this.icon ='🌲';
    this.x = random(width);
    this.y = random(height);
    this.size = size;
  }
  show(){
    textSize(this.size);
    text(this.icon, this.x, this.y);
  }
}

class Friend {
  constructor(icon){
    this.icon = icon;
    this.x = random(width);
    this.y = random(height);
    this.size = 40;
  }
  show(){
    textSize(this.size);
    text(this.icon, this.x, this.y);
  }
}

class Oz {
  constructor(x, y){
    this.icon = "🧙🏻‍♀️";
    this.x = x;
    this.y = y;
    this.history = [];
  }
  show(){
    textSize(44);
    text(this.icon, this.x, this.y);
    let v = createVector(this.x, this.y);
    this.history.push(v);
    console.log(this.history.length);
    if (this.history.length > 10) {
      this.history.splice(0, 1);
    }


    for(let i = 0; i < this.history.length; i ++){
      let position = this.history[i];
      // console.log(position);
      position.x += i * 44;
      position.y += i * 44;

      let friend = "🦜";
      text(friend, position.x, position.y);
    }
  }
}
