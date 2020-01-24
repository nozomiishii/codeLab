console.log('ready to sketch');

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //game starts
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    });
    console.log('yay');
  } else {
    console.log("boo");
  }

}


function draw() {
  background(48, 140, 9);

  textAlign(CENTER, CENTER);
  textSize(48);
  fill(238);
  text('👩🏻‍🎓: "ready!"', windowWidth * 0.5, windowHeight * 0.5);

}
