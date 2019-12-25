console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let players = [];
let oz;

let trees = [];
let numOfTrees = 30;

let friends = [];
const animals = ['🐕','🐖','🦕','🐑','🦜','🦆','🐜','🦒','🦝','🐓'];
// let friend;
let space = 44;
function acrossFriends(){
  if(friends.length < 10){
    let randomIcon = animals[Math.floor(Math.random() * animals.length)];
    friends.push(new Friend(randomIcon));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < numOfTrees; i++){
    trees.push(new Tree());
  }
  setInterval(acrossFriends, 1000);
}


function draw() {
  background(6, 21, 30);
  // oz = new Oz(mouseX, mouseY);
  // oz.show();
  for(let i = 0; i > players.length; i++){
    if(i = players[players.length]){
      players[players.length].show();
    }
  }

  // trees show
  for(tree of trees){
    tree.show();
  }
  // friend show
  for(friend of friends){
    friend.show();
  }

  // judgement
  let space = 44;
  // for([index, friend] of friends.entries()){
  //   let d = dist(friend.x, friend.y, mouseX, mouseY);
  //   if(d < 42){
  //     // friends.splice(index, 1);
  //     return friend.x = mouseX + 10;
  //   }
  //   if(d < 42){
  //     // friends.splice(index, 1);
  //     return friend.y = mouseY + 10;
  //   }
  // }
  for(let i = 0; i < friends.length; i++){
    let d = dist(friends[i].x, friends[i].y, mouseX, mouseY);
    if(d < 42){
      friends.splice(i, 1);
      // friends[i].x = oz.x + 10;
      // friends[i].y = oz.y + 10;
    }
  }
}

function mouseDragged(){
  players.push(new Oz(mouseX, mouseY));
}






























