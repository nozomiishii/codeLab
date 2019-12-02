//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here

const card = document.querySelector('.card');

card.addEventListener('mouseover',function(){
  card.classList.add('power');
  setTimeout(function(){
    card.classList.remove('power');
  },1000);
});

// const front = document.querySelector('.front');
// const back = document.querySelector('.back');
// const comment = document.querySelector('.comment');

// card.addEventListener('click', function(){
//   front.classList.toggle('frontFliped');
//   back.classList.toggle('backFliped');
//   setTimeout(function(){
//     comment.classList.add('result')
//     comment.innerHTML= "おとなしく家で寝よう";
//   },1000);
// })

// ep2=================================

class Tarot{
  constructor(name, emoji, background, content){
    this.name = name;
    this.emoji = emoji;
    this.background = background;
    this.content = content;
  }
}

const tarot1 = new Tarot(
  'death.',
  '💀',
  'radial-gradient(#232323, #EAEAE9)',
  'おとなしく家で寝よう'
  );

const tarot2 = new Tarot(
  'the emperor.',
  '🤴🏻',
  'radial-gradient(#D4BF75, #EAEAE9)',
  'いい日だ、外に出よう'
  );

const tarots = [tarot1, tarot2];
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const comment = document.querySelector('.comment');
const backH1 = document.querySelector('.back h1');
const backP = document.querySelector('.back p');

card.addEventListener('click', function(){
const random = Math.floor(Math.random() * tarots.length);
  front.classList.toggle('frontFliped');
  back.classList.toggle('backFliped');
  backH1.innerHTML = tarots[random].emoji;
  backP.innerHTML = tarots[random].name;
  back.style.background = tarots[random].background;
  setTimeout(function(){
    console.log(random);
    comment.classList.add('result')
    comment.innerHTML = tarots[random].content;
  },1000);
})







































