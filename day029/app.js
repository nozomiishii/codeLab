const garlics = document.querySelectorAll('.garlic');
const vampire = document.querySelector('.vampire');
const nope = document.querySelector('.nope');
const yay = document.querySelector('.yay');
const game = document.querySelector('.game');

const random = Math.floor( Math.random() * 26)

garlics[random].classList.add('helped');

for(garlic of garlics){
  garlic.addEventListener('click',function(event){
    this.textContent = "";
    if(this.classList.contains("helped")){
      game.classList.add('broke');
      setTimeout(function(){
        vampire.classList.add("unsealed");
      },1000);
      setTimeout(function(){
        yay.classList.add("yayClicked");
      },4500);
      console.log("!!!");
    } else {
      console.log("...");
      nope.classList.add("nopeClicked");
      setTimeout(function(){
        nope.classList.remove("nopeClicked");
      },1000);
    }
  });
}
