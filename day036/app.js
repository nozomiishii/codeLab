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
const btn = document.querySelector('.btn');
const wander = document.querySelector('.wander');
const battle = document.querySelector('.battle');
const comment = document.querySelector('.comment p');

btn.addEventListener('click', function(){
  btn.style.visibility = 'hidden';
  you.classList.add('walk');
  wander.classList.add('flash');
  setTimeout(function(){
    battle.classList.add('appare');
  },4000);
  setTimeout(function(){
    comment.textContent = '🧖‍♂️:"A vase came out. better rubbing it like clicking"';
  },7000);
});


// genie came out!!!


const vase = document.querySelector('.vase');
const genie = document.querySelector('.genie');

vase.addEventListener('click', function(){
  genie.classList.add('rub');
});
