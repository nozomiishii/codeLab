//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here

const sun = document.querySelector('.sun span');
const size = document.querySelector('#size');
const rotate = document.querySelector('#rotate');
const switchOn = document.getElementById('switchOn');
const switchOff = document.getElementById('switchOff');


// changing the size
size.addEventListener('change',function(){
  sun.style.fontSize = `${this.value + 5}px`;
  console.log(this.value);
});

// changing the direction
rotate.addEventListener('change',function(){
  sun.style.transform = `rotateZ(${this.value}deg)`;
  console.log(this.value);
});

// make it animate

animation.addEventListener('change',function(){
  if(switchOn.checked){
    sun.classList.add('moveRotate');
  } else {
    sun.classList.remove('moveRotate');
  }
});

// change the icon
const icons = ['🌚','🌛','🌝','🌜'];

let i = 0
sun.addEventListener('click',function(){
  if(i >= icons.length ){
    sun.innerHTML = '🌞';
    i = 0
  } else{
    sun.innerHTML = icons[i];
    i++
    console.log(i);
  }
});
