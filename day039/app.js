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
const commentP = document.querySelector('.comment p')

const enemies = ["🦸🏻‍♂️", "🧝🏻‍♀️", "🧞‍♂️", "🧖‍♂️", "🧙‍♀️"]
startBtn.addEventListener('click',function(){
  comment.classList.toggle('enemy');
  if(!comment.classList.contains('enemy')){
    let random = Math.floor(Math.random() * enemies.length);
    console.log(random);
    commentP.innerHTML = enemies[random];
  }
});
