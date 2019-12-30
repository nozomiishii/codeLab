var img;

function preload() {
	img = loadImage('kusayari.jpg');

}

function setup() {

	createCanvas(windowWidth, windowHeight);

}

let imgs = [];

function draw() {
	background(255);
	textAlign(CENTER);
	textSize(69);
	text('できた、、😭', windowWidth / 2, windowHeight / 2);
	for (let i = 0; i < imgs.length; i++) {
		image(img, imgs[i].x, imgs[i].y, imgs[i].w, imgs[i].h);
	}
}

function mousePressed() {
	imgs.push(new Photo(mouseX, mouseY, 100, 100));
}
