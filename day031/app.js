console.log('!!!');

let timer = document.querySelector('.timer');
let time = 3;
const start = document.querySelector('.start');
const clear = document.querySelector('.clear');
const choices = document.querySelectorAll('.choice');

for(choice of choices){
  choice.addEventListener('click',function(){
    time = this.dataset.time;
    timer.textContent = `⏰ ${time} ⏰`;
    console.log(time);

  });
}


start.addEventListener('click',function(){
  start.classList.add('hide');
  if(time>0){
    const setTimer = setInterval(function(){
      timer.textContent = time;
      console.log(time);
      time--
      if(time < 0){
        console.log('finish!')
        clearInterval(setTimer);
      }
    }, 1000);
  }
});

clear.addEventListener('click',function(){
  time = 0;
  start.classList.remove('hide');
});
