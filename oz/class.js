console.log("class.js");
const width = window.innerWidth;
const height = window.innerHeight;

const oz = {
  icon: '🧙🏻‍♀️',
  show(){
    textSize(44);
    text(oz.icon, mouseX, mouseY);
  }
}

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
