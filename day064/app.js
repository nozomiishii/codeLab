//check
console.log('app.js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
  setInterval(createHuman, 1000);
});

// write game code from here
window.addEventListener('touchmove', function(event) {
    event.preventDefault();
},{passive:false});
