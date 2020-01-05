//check
console.log('app.js is here');

// write game code from here
window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});

new Vue({
  el: '#characterList',
  data: {
    characters: [{
        icon: "🐉",
        name: "ryu",
        attack: 100,
        defense: 100,
        hp: 100
      },
      {
        icon: "🦄",
        name: "unicorn",
        attack: 20,
        defense: 180,
        hp: 100
      },
      {
        icon: "🧚🏻",
        name: "butterfly person",
        attack: 10,
        defense: 10,
        hp: 300
      },
      {
        icon: "🦸🏻‍♂️",
        name: '"hero"',
        attack: 69,
        defense: 69,
        hp: 69
      }
    ]
  },
  methods: {
    greet() {
      return `Hello, ${this.name}`
    },
    makeToDoList(e) {
      console.log(e.target.value)
      this.text = e.target.value
    },
    showRyu() {
      console.log(1)
      this.ryu = !this.ryu
    }
  }

})
