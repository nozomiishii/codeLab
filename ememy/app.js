//check
console.log('js is here');
//game start
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopbtn')
const comment = document.querySelector('.comment')
// const commentH1 = document.querySelector('.comment h1')

startBtn.addEventListener('click',function(){
  comment.classList.add('enemy');
});
