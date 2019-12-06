//check
console.log('js is here');
//game starts
const start = document.getElementById('start');
const op = document.querySelector('.op');

start.addEventListener('click',function(){
  op.classList.add('start');
});

// write game code from here
const progress = document.querySelector('progress');
const button = document.querySelector('button');
const percentage = document.querySelector('.bar p');
console.log(progress.value);
const fail = document.querySelector('.fail');

button.addEventListener('click',function(){
  const progressBar = setInterval(function(){
    if(progress.value > 98){
      console.log('fail');
      clearInterval(progressBar);
      setTimeout(function(){
        fail.classList.add('end');
        setTimeout(function(){
          fail.classList.remove('end');
        },2000)
      },2000);
    } else {
      progress.value++
      percentage.innerHTML = `${progress.value}%`;
    }
  },100);
  if(button.classList.contains('btnClicked')){
    button.classList.remove('btnClicked');
  }else{
    button.classList.add('btnClicked');
  }
})
