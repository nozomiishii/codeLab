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


const enemies = ["🦸🏻‍♂️", "🧝🏻‍♀️", "🧞‍♂️", "🧖‍♂️", "🧙‍♀️"]




for(enemy of enemies){
  const gridItem = document.createElement('h1');
  const gridContent = document.createTextNode(enemy);
  gridItem.appendChild(gridContent);
  enemiesBox.appendChild(gridItem);
}
