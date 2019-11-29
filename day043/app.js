//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const dice = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣'];
const turtle = document.querySelector('.turtle');
const throwDicebtn = document.querySelector('.throwDicebtn');
const result = document.querySelector('.result');
const width = window.innerWidth;
const height = window.innerHeight;
const end = document.querySelector('.end');

let nowSquare = 0
throwDicebtn.addEventListener('click',function(){
  let random = Math.floor(Math.random() * dice.length);
  result.innerHTML = dice[random];
  nowSquare += random
  turtle.style.left = `${nowSquare}px`;
  console.log(nowSquare);
  if(nowSquare == 200){
    end.style.display = 'flex';
  }
});

