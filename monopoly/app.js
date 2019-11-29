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
