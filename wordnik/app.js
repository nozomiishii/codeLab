//check
console.log("app.js is here");
// setting
window.addEventListener(
  "touchmove",
  function(event) {
    event.preventDefault();
  },
  { passive: false }
);

// write game code from here
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const newYearCard = document.querySelector(".newYearCard");

let clicked = false;
newYearCard.addEventListener("click", getText);
function getText() {
  fetch("text.txt")
    .then(response => response.text())
    .then(data => {
      if (!clicked) {
        btn.innerHTML = "🐭";
        output.innerHTML = data;
        return (clicked = true);
      } else {
        btn.innerHTML = "🐗";
        output.innerHTML = "Thanks 2019";
        return (clicked = false);
      }
    })
    .catch(err => console.log(err));
}
