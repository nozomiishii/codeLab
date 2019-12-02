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
const btn = document.querySelector('.btn');



//これを
// let colorValue = 0;
// let clear = colorValue;
//こう書けるっぽい
let colorValue = 0, clear;

btn.addEventListener('click',function(){
  if(btn.classList.contains('started')){
    clearInterval(clear);
    btn.classList.remove('started');
    console.log('stop');
  } else {
    clear = setInterval(changeColor, 100);
    btn.classList.add('started');
  }
});

function changeColor(){
  console.log('start');
  colorValue++
  color.style.background = `linear-gradient(to left, rgb(${colorValue}, 100, 100), rgb(200,200,200))`;
}
