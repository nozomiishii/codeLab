const garlics = document.querySelectorAll('.garlic');
const vampire = document.querySelector('.vampire');
const nope = document.querySelector('.nope');

const random = Math.floor( Math.random() * 26)

garlics[random].classList.add('helped');

for(garlic of garlics){
  garlic.addEventListener('click',function(event){
    this.textContent = "";
    if(this.classList.contains("helped")){
      vampire.classList.add("unsealed");
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
