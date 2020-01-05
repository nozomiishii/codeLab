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
  },
  methods: {
    submitData(e) {
      console.log(e.target.icon.value)
      if (e.target.name && e.target.icon) {
        db.collection('animals').add({
          name: e.target.name.value,
          icon: e.target.icon.value
        });
        e.target.name.value = "";
        e.target.icon.value = "";
      }
    }
  }
})
