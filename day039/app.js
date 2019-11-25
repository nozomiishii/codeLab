//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here

const birds = document.querySelector('.birds');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  const newDiv = document.createElement('div');
  const bird = document.createTextNode('🦆');
  newDiv.classList.add('float');
  newDiv.appendChild(bird);
  birds.appendChild(newDiv);
});
