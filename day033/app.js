const boxes = document.querySelectorAll('.box');
const items = ["🗡", "🛡", "💰", "💩"];
const goodH2 = document.querySelector('.good h2');
const good = document.querySelector('.good');

for(box of boxes){
  box.addEventListener('click',function(){
    let random = Math.floor(Math.random()*items.length);
    const item = items[random];
    goodH2.textContent = item;
    setTimeout(function(){
       good.classList.add('ended');
    },500);
  });
}

// hidden event
const hidden = document.querySelector('.hidden');
const bad = document.querySelector('.bad');
hidden.addEventListener('click',function(){
  bad.classList.add('ended');
});
