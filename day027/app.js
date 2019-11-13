const corns = document.querySelectorAll('.corn');
// const grow = document.querySelectorAll('.grow');
const harvest = document.querySelector('.harvest h1 span')
let count = 0

for(corn of corns){
  corn.addEventListener("click",function(){
    const produce = this.querySelector('.grow');
    if(produce.textContent == ""){
      produce.textContent = "🌱";
      setTimeout(function(){
        produce.textContent = "🌽";
      },5000);
    } else if (produce.textContent == "🌽"){
      produce.textContent = "";
      count++
      harvest.textContent = count;
    }
  });
}


