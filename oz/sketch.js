console.log('ready to sketch');
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let trees = [];
let numOfTrees = 30;

let friends = [];
const animals = ['🐕','🐖','🦕','🐑','🦜','🦆','🐜','🦒','🦝','🐓'];


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
  // oz show
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































