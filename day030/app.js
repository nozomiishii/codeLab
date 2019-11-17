console.log('!!!');

let timer = document.querySelector('.timer');
let time = 3;
const btn = document.querySelector('.btn');
const choices = document.querySelectorAll('.choice');

for(choice of choices){
  choice.addEventListener('click',function(){
  });
}

btn.addEventListener('click',function(){
    // btn.classList.add('hide');
    const setTimer = setInterval(function(){
      timer.textContent = time;
      console.log(time);
      time--
      if(time < 0){
        console.log('finish!')
        clearInterval(setTimer);
      }
    }, 1000);
});

