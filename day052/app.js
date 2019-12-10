//check
console.log('js is here');
// write game code from here
const game = document.querySelector('.game');
const one = document.querySelector('.one');
const trip1 = document.querySelector('.trip1');

one.addEventListener('click',function(){
  trip1.classList.add('high');
  game.classList.add('took');
});

// ep2
const two = document.querySelector('.two');
const trip2 = document.querySelector('.trip2');

two.addEventListener('click',function(){
  trip2.classList.add('high');
  game.classList.add('took');
});

const three = document.querySelector('.three');
const trip3 = document.querySelector('.trip3');

three.addEventListener('click',function(){
  game.classList.add('took');
  trip3.style.opacity = "0";
});
