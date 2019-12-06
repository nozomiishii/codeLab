//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const sweets = ['🧁','🍭','🍬','🍫','🍰','🍦','🍮','🍩','🎂'];
const random = Math.floor(Math.random() * sweets.length);

console.log(sweets[random]);

const btn = document.querySelector('.btn');
const btnH1 = document.querySelector('.hungryDude h1');

btn.addEventListener('click', function(){
  btn.innerHTML = 'みたされたなあ〜';
  btn.classList.add('btnClicked');
  btnH1.innerHTML = '🤤';
})
