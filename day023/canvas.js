console.log('!!!!');

const canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const c = canvas.getContext('2d');

// c.fillRect(x, y, width, height)


for(let i = 0; i < 10; i++){
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.fillStyle = "#102F57";
  c.fillRect(x, y, 50, 50);
  c.fillStyle = "#0E172A";
  c.fillRect(x, y, 100, 100);
  c.fillStyle = "#102F57";
  c.fillRect(x, y, 200, 200);
}



// line
for(let i = 0; i < 75; i++){
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(canvas.width/2, canvas.height/2);
  c.strokeStyle = "#E0AC0E";
  c.stroke();
}


for(let i = 0; i < 100; i++){
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.strokeStyle = "#E64C6E";
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();
}


