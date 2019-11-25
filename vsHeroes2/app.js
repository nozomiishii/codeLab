//check
console.log('js is here');
//game start
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopbtn');
const comment = document.querySelector('.comment');
const commentP = document.querySelector('.comment p');
const enemiesBox = document.querySelector('.enemies-box');

class Enemy{
  constructor(emoji, name, attack, defense, hp){
    this.emoji = emoji,
    this.name = name,
    this.attack = attack,
    this.defense = defense,
    this.hp = hp
  }
}

const hero = new Enemy("🦸🏻‍♂️", "Hero", 100, 80, 30);
const elf = new Enemy("🧝🏻‍♀️", "elf", 80, 100, 30);
const genie = new Enemy("🧞‍♂️", "genie", 100, 100, 10);
const man = new Enemy("🧖‍♂️", "man", 50, 50, 100);
const wizard = new Enemy("🧙‍♀️", "wizard", 80, 80, 80);

const enemies = [hero, elf, genie, man, wizard];

for(enemy of enemies){
  const gridItem = document.createElement('h1');
  const gridContent = document.createTextNode(enemy.emoji);
  gridItem.appendChild(gridContent);
  enemiesBox.appendChild(gridItem);
}

// get enemies information
const enemyLists = document.querySelectorAll('.enemies-box h1');
const checked = document.querySelector('.checked');
const status = document.querySelector('.status');
const emoji = document.querySelector('.emoji');
const name = document.querySelector('.name');
const attack = document.querySelector('.attack');
const defense = document.querySelector('.defense');
const hp = document.querySelector('.hp');

for(enemy of enemyLists){
  enemy.addEventListener('click',function(){
    this.classList.add('checked');

    emoji.innerHTML = this.emoji;
    name.innerHTML = this.name;
    attack.innerHTML = this.attack;
    defense.innerHTML = this.defense;
    hp.innerHTML = this.hp;
  });
}





























