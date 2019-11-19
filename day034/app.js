//check
console.log('js is here');
//game start
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const game = document.querySelector('.game');
const choice = document.querySelector('.choice');
const trip = document.querySelector('.trip');

choice.addEventListener('click',function(){
  game.classList.add('took');
  trip.classList.add('high');
});
