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

let teamMembers = [];
function acrossFriends(){
  if(friends.length < 10){
    let randomIcon = animals[Math.floor(Math.random() * animals.length)];
    friends.push(new Friend(randomIcon));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < numOfTrees; i++){
    trees.push(new Tree(46));
  }
  setInterval(acrossFriends, 1000);
}


function draw() {
  background(6, 21, 30);
  oz = new Oz(mouseX, mouseY);
  oz.show();
  oz.move();

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

  for(let i = 0; i < friends.length; i++){
    let d = dist(friends[i].x, friends[i].y, mouseX, mouseY);
    if(d < 42){
      teamMembers.push(friends[i].icon);
      friends.splice(i, 1);
    }
  }
}

// function mouseDragged(){
//   players.push(new Oz(mouseX, mouseY));
// }






























