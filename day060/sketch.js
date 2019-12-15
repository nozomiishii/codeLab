console.log('ready to sketch');
let words = [];
let word;
let textbox;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textbox = createInput('');
  textbox.position(width/2, height/2);
  textbox.style('transform','translate(-50%,-50%)')
  textbox.style('padding','10px');
  textbox.input(tweet);
}

function tweet(){
  word = new Word(
  textbox.value(),
  random(width),
  random(height),
  random(-3, 3),
  random(-3, 3),
  random(11, 55)
  )
  words.push(word);
  console.log(textbox.value());
  background(random(255));
}

function draw() {
  background(6);
  textAlign(CENTER, CENTER);
  for(word of words){
    word.show();
    word.move();
  }
}

