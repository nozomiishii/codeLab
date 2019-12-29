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

newYearCard.addEventListener("click", getText);
function getText() {
  fetch("text.txt")
    .then(response => response.text())
    .then(data => {
      btn.innerHTML = "🐭";
      output.innerHTML = data;
    })
    .catch(err => console.log(err));
}
