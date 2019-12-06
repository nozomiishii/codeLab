//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const btn = document.querySelector('.btn');
const btnH1 = document.querySelector('.hungryDude h1');
const sweetsH1 = document.querySelector('.sweetsBackground h1');
let interval;
btn.addEventListener('click', function(){
  btn.innerHTML = 'まみれきった';
  btn.classList.add('btnClicked');
  btnH1.innerHTML = '🤤:"みたされてるなあ〜"';
  if(!interval){
    interval = setInterval(function(){
      const sweets = ['🧁','🍭','🍬','🍫','🍰','🍦','🍮','🍩','🎂'];
      const random = Math.floor(Math.random() * sweets.length);
      sweetsH1.innerHTML += sweets[random];
    },100)
  } else{
    clearInterval(interval);
    interval = false;
    btnH1.innerHTML = '🥺:"まだいけるなあ"';
    btn.innerHTML = 'まみれる';
    btn.classList.remove('btnClicked');
  }
})
