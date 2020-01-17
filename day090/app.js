//check
console.log('app.js is here');

const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click', function () {
  op.classList.add('start');
});
