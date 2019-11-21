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
btn.addEventListener('click', function(){
  you.classList.add('walk');
  wander.classList.add('flash');

});
