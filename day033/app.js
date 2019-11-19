const boxes = document.querySelectorAll('.box');
const items = ["🗡", "🛡", "💰", "💩"];
for(box of boxes){
  box.addEventListener('click',function(){
    console.log(this)
  });
}
