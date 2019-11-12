const corns = document.querySelectorAll('.corn');
// const grow = document.querySelectorAll('.grow');
let count = 0
console.log(corns);

for(corn of corns){
  corn.addEventListener("click",function(){
    console.log(this);
    this.querySelector('.grow').textContent = "🌱";
    count++
    console.log(count);
  });
}
