console.log('!!!');

let timer = document.querySelector('.timer');
let time = 3;
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    btn.classList.add('hide');
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
