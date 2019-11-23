//check
console.log('js is here');
//game start
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const you = document.querySelector('.you');
const ep1 = document.querySelector('.ep1');
const wander = document.querySelector('.wander');
const battle = document.querySelector('.battle');
const comment = document.querySelector('.comment p');

ep1.addEventListener('click', function(){
  ep1.style.visibility = 'hidden';
  you.classList.add('walk');
  wander.classList.add('flash');
  setTimeout(function(){
    // vase come out
    wander.style.display ="none";
    battle.classList.add('appare');
  },4000);
  setTimeout(function(){
    comment.textContent = '🧖‍♂️:"A vase came out. better rubbing it like clicking"';
  },7000);
});


// genie came out!!!

// genie status
const monster = {
  name: 'genie',
  attack: 999,
  defense: 999,
  hp: 999,
  comment(){
    console.log(`I'm ${this.name}. Attack:${this.attack} Defense: ${this.defense} HP:${this.hp}`);
  }
};

monster.comment();

const vase = document.querySelector('.vase');
const genie = document.querySelector('.genie');
const ep2 = document.querySelector('.ep2');
const ep3 = document.querySelector('.ep3');

vase.addEventListener('click', function(){
  genie.classList.add('rub');
    comment.textContent ="Genie came out!!"
    const p = document.createElement("p");
    const commentBox = document.querySelector(".commentBox");
    const genieContent = document.createTextNode(`I'm ${monster.name}. Attack:${monster.attack} Defense: ${monster.defense} HP:${monster.hp}`);
    p.appendChild(genieContent);
    commentBox.appendChild(p);
  ep2.style.visibility = "visible";
});

const runaway = document.querySelector('.runaway');
const monsterBox = document.querySelector('.monsterBox');

let count = 0;
runaway.addEventListener('click', function(){
  count++;
  if(count >= 3){

    comment.textContent = "Genie attacked you!";
    comment.style.fontSize = "30px";
    setTimeout(function(){
      battle.classList.add('genieAttacked');
    },1000);
    setTimeout(function(){
      ep3.classList.add('end');
    },4000);


  } else{
    battle.classList.add('attacked');
    battle.classList.remove('appare');
    comment.textContent ="you can't runaway!!!"
    // add genie comments
    const p = document.createElement("p");
    const commentBox = document.querySelector(".commentBox");
    const genieContent = document.createTextNode(`I'm also ${monster.name}. Attack:${monster.attack} Defense: ${monster.defense} HP:${monster.hp}`);
    p.appendChild(genieContent);
    commentBox.appendChild(p);
    setTimeout(function(){
      battle.classList.remove('attacked');
    },1000)
    const clone = monsterBox.cloneNode(true);
    battle.appendChild(clone);
    genie.classList.add('rub');
  }
});



































