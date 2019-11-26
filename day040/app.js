//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here

const shine = document.querySelector('input');
const sun = document.querySelector('.sun');


shine.addEventListener('change',function(){
  sun.style.fontSize = `${this.value + 10}px`;
  console.log(this.value);
})

