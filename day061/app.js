//check
console.log('app.js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');

  // create zombies
  setInterval(function(){
    let randomZombieIcon = Math.floor(Math.random() * zombieIcons.length);
    zombie = new Zombie(
      zombieIcons[randomZombieIcon],
      random(width),
      0,
      randomZombieIcon
      );
    zombies.push(zombie);
  },100);
});

// write game code from here
window.addEventListener('touchmove', function(event) {
    event.preventDefault();
},{passive:false});
