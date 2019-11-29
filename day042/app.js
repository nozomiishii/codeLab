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
const choice1 = document.querySelector('.choice1');
const trip1 = document.querySelector('.trip1');

choice1.addEventListener('click',function(){
  game.classList.add('took');
  trip1.classList.add('high');
});

// ep2
const no = document.querySelector('.no');
const commentH1 = document.querySelector('.comment h1');
const choice2 = document.querySelector('.choice2');
const trip2 = document.querySelector('.trip2');

no.addEventListener('click', function(){
  commentH1.innerHTML = '💆🏻‍: "Cool. Sawajiri style?"'
  no.style.display = "none";
  choice1.classList.add('took');
  choice2.classList.add('hiddenChoice');
});

choice2.addEventListener('click',function(){
  game.classList.add('took');
  trip2.classList.add('high');
});
