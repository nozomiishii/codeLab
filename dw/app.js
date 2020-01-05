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

// creating new apps 

new Vue({
  el: '#creatingAnimal',
  data: {
    icons: [{
        icon: "🐘"
      },
      {
        icon: "🦒"
      },
      {
        icon: "🦓"
      },
      {
        icon: "🦚"
      },
      {
        icon: "🦧"
      }
    ]
  }
})
