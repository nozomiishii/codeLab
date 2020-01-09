//check
console.log('app.js is here');

// write game code from here
window.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, {
  passive: false
});

let random;

new Vue({
  el: "#app",
  data: {
    hero: {
      icon: '🦸🏻‍♂️',
      like: 0,
      power: 100
    }

  },
  methods: {
    justice() {
      this.hero.like++
      random = Math.random();
      console.log(random);
      if (random < 0.3) {
        this.hero.power++;
      }
    },
    money() {
      this.hero.like += 10
      this.hero.power -= 10
    }
  }
})
