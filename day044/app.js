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

const front = document.querySelector('.front');
const back = document.querySelector('.back');
const comment = document.querySelector('.comment');

card.addEventListener('click', function(){
  front.classList.toggle('frontFliped');
  back.classList.toggle('backFliped');
  setTimeout(function(){
    comment.classList.add('result')
    comment.innerHTML= "おとなしく家で寝よう";
  },1000);
})
