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


btn.addEventListener('click',function(){
  if(color.classList.contains('paused')){
    color.classList.remove('paused')
    color.style.animationPlayState = "running";
  } else{
    color.classList.add('paused')
    color.style.animationPlayState = "paused";
  }
});








































