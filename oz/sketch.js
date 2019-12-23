console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let oz;

let trees = [];
let numOfTrees = 30;

let friends = [];
const animals = ['🐕','🐖','🦕','🐑','🦜','🦆','🐜','🦒','🦝','🐓'];
// let friend;

function acrossFriends(){
  if(friends.length < 10){
    let randomIcon = animals[Math.floor(Math.random() * animals.length)];
    friends.push(new Friend(randomIcon));
  }
}

function setup() {
  oz = {
    icon: '🧙🏻‍♀️',
    history: [],
    show(){
      textSize(44);
      text(oz.icon, mouseX, mouseY);
      let v = createVector(mouseX, mouseY);
      oz.history.push(v);
      if(oz.history.length > 20){
        oz.history.splice(0, 1);
      }
    },
    move(){
      for(let i = 0; i < oz.history.length; i++){
        friend = "🦜";
        let position = oz.history[i];
        fill(255);
        text(friend, position.x, position.y);
      }
    }
  }
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < numOfTrees; i++){
    trees.push(new Tree());
  }
  setInterval(acrossFriends, 1000);
}


function draw() {
  background(6, 21, 30);
  // oz show
  oz.move();
  oz.show();

  // trees show
  for(tree of trees){
    tree.show();
  }
  // friend show
  for(friend of friends){
    friend.show();
  }

  // judgement
  for([index, friend] of friends.entries()){
    let d = dist(friend.x, friend.y, mouseX, mouseY);
    if(d < 42){
      friends.splice(index, 1);
    }
  }
}































