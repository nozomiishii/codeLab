let lifeCounts = 8;
const life = document.querySelector('.life');
console.log(life);



for(let i = 0; i < lifeCounts; i++ ){
  console.log('!!')
  const lifeCount = document.createElement('li');
  const heart = document.createTextNode('🧡')
  lifeCount.appendChild(heart);
  life.appendChild(lifeCount);
}
const attack = document.querySelector('.attack');
const potion = document.querySelector('.potion');
const hentai = document.querySelector('.hentai');

attack.addEventListener('click',function(){
  lifeCounts--
  life.removeChild(life.lastChild);

  if(lifeCounts > 12){
    potion.classList.add('hide');
  } else if(lifeCounts < 1){
    lifeCounts ++
    const lifeCount = document.createElement('li');
    const heart = document.createTextNode('🧡')
    lifeCount.appendChild(heart);
    life.appendChild(lifeCount);
    hentai.classList.add('clicked');
    setTimeout(function(){
      hentai.classList.remove('clicked');
    },2000);
  } else{
    const game = document.querySelector('.game');
    game.classList.add('hit');
    setTimeout(function(){
      game.classList.remove('hit');
    }, 1000);
  }
});

potion.addEventListener('click',function(){
  lifeCounts++
  console.log('!!')
  const lifeCount = document.createElement('li');
  const heart = document.createTextNode('🧡')
  lifeCount.appendChild(heart);
  life.appendChild(lifeCount);
  if(lifeCounts > 12){
    potion.classList.add('hide');
    console
  } else{
    potion.classList.remove('hide');
  }
});


