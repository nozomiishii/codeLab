//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here

const color = document.querySelector('.comment h1');
const btn = document.querySelector('.btn');
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

red.addEventListener('change',function(){
  color.style.background = `linear-gradient(to left, rgb(${red.value}, ${green.value}, ${blue.value}), rgb(${255 - red.value}, ${255 - green.value}, ${255 - blue.value})`;
  console.log(red.value);
});
green.addEventListener('change',function(){
  color.style.background = `linear-gradient(to left, rgb(${red.value}, ${green.value}, ${blue.value}), rgb(${255 - red.value}, ${255 - green.value}, ${255 - blue.value})`;
  console.log(green.value);
});
blue.addEventListener('change',function(){
  color.style.background = `linear-gradient(to left, rgb(${red.value}, ${green.value}, ${blue.value}), rgb(${255 - red.value}, ${255 - green.value}, ${255 - blue.value})`;
  console.log(blue.value);
});
//これを
// let colorValue = 0;
// let clear = colorValue;
//こう書けるっぽい
let redValue = red.value, redClear;
let greenValue = green.value, greenClear;
let blueValue = blue.value, blueClear;


btn.addEventListener('click',function(){
  if(color.classList.contains('paused')){
    color.classList.remove('paused')
    color.style.animationPlayState = "running";
  } else{
    color.classList.add('paused')
    color.style.animationPlayState = "paused";
  }
});








































