//check
console.log('app.js is here');
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click', function () {
  op.classList.add('start');
});
// write game code from here
window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});
