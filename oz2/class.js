console.log("class.js");
const width = window.innerWidth;
const height = window.innerHeight;

let history = [];
class Tree {
  constructor(size){
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
  }
  show(){
    textSize(44);
    text(this.icon, this.x, this.y);
    // history.push(this.x, this.y);
  }

  move(){
    for(let i = 0; i < history.length; i++){
      let dx = history[i].x - this.x
      // let dy = this.history[i].y - this.Y
      if(dx > 44 || dx < -44 ){
        history.push(this.x);
      }
    }

    console.log(history);
    if (history.length > 10) {
      history.splice(0, 1);
    }
  }



    // for(let i = 0; i < this.history.length; i ++){
    //   let position = this.history[i];
    //   // console.log(position);
    //   position.x += i * 44;
    //   position.y += i * 44;

    //   let friend = "🦜";
    //   text(friend, position.x, position.y);

}
