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


// const enemies = ["🦸🏻‍♂️", "🧝🏻‍♀️", "🧞‍♂️", "🧖‍♂️", "🧙‍♀️"]

// for(enemy of enemies){
//   const gridItem = document.createElement('h1');
//   const gridContent = document.createTextNode(enemy);
//   gridItem.appendChild(gridContent);
//   enemiesBox.appendChild(gridItem);
// }


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

console.log(enemies[0].emoji);
