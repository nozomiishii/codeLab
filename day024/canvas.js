console.log('!!!!');

const canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const c = canvas.getContext('2d');

// c.fillRect(x, y, width, height)


// for(let i = 0; i < 10; i++){
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.fillStyle = "#102F57";
//   c.fillRect(x, y, 50, 50);
//   c.fillStyle = "#0E172A";
//   c.fillRect(x, y, 100, 100);
//   c.fillStyle = "#102F57";
//   c.fillRect(x, y, 200, 200);
// }



// // line
// for(let i = 0; i < 75; i++){
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.moveTo(x, y);
//   c.lineTo(canvas.width/2, canvas.height/2);
//   c.strokeStyle = "#E0AC0E";
//   c.stroke();
// }


// for(let i = 0; i < 100; i++){
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.strokeStyle = "#E64C6E";
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.stroke();
// }

// c.beginPath();
// c.strokeStyle = "#E64C6E";
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.stroke();

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  console.log('!!!');
  c.beginPath();
  c.strokeStyle = "#3dc1d3";
  c.fillStyle = "#3dc1d3";
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fill();
  c.stroke();

  if(x + radius > innerWidth || x - radius < 0){
    dx = -dx;
  }

  if(y + radius > innerHeight || y - radius < 0){
    dy = -dy;
  }
  x += dx;
  y += dy
}





























