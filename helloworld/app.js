//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here

const color = document.querySelector('.comment h1');

let colorValue = 0;
setInterval(function(){
  colorValue++
  color.style.background = `linear-gradient(to left, rgb(${colorValue}, 100, 100), rgb(200,200,200))`;

}, 100);
