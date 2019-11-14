console.log('!!!');

const btn = document.querySelector('.btn');
const attack = document.querySelector('.attack');
const input = document.querySelector('input');
const life = document.querySelector('.life');
const end = document.querySelector('.end');


let count = 100;
btn.addEventListener('click', function(){
  life.style.width = `${count}vw`;

  const newWord = document.createElement("DIV");
  const wordContent = document.createTextNode(input.value);

  newWord.appendChild(wordContent);
  attack.appendChild(newWord);
  newWord.classList.add('shout');
  count -= 5
  console.log(count)
  if(count == 0){
    end.classList.remove('over');
  }else if(count < 20){
    life.style.backgroundColor = '#c70d3a';
  }
});

