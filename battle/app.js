let lifeCounts = 12;
const life = document.querySelector('.life');

for(let i = 0; i < lifeCounts; i++ ){
  console.log('!!')
  const lifeCount = document.createElement('li');
  const heart = document.createTextNode('🧡')
  lifeCount.appendChild(heart);
  life.appendChild(lifeCount);
}

const hearts = document.querySelectorAll('.life li');
console.log(hearts);

const attack = document.querySelector('.attack');
const potion = document.querySelector('.potion');
const hentai = document.querySelector('.hentai');

attack.addEventListener('click',function(){
  lifeCounts--
  for(heart of hearts){

  }
  if(lifeCounts > 12){
    potion.classList.add('hide');
  } else if(lifeCounts < 2){
    lifeCounts ++
    hentai.style.display = 'flex';
    setTimeout(function(){
      hentai.style.display = 'none';
    },1000);
  }
});

potion.addEventListener('click',function(){
  console.log('!!')
  const lifeCount = document.createElement('li');
  const heart = document.createTextNode('🧡')
  lifeCount.appendChild(heart);
  life.appendChild(lifeCount);
  lifeCounts++
  if(lifeCounts > 12){
    potion.classList.add('hide');
    console
  } else{
    potion.classList.remove('hide');
  }
});


