//Act - 4 (Work with Imagea) - Pixel Data//

var img, x, y;

//pre load function is used so the images get loaded before the program starts//
function preload() {
  img = loadImage("img1.jpeg"); //we uploaded the imag in the name of 'img1' so it appears here//
}

function setup() {
  createCanvas(600, 600); //canvas size//
  background("black"); //bg color//
  noStroke(); //removing the stroke/outline//
}

function draw() {
  
  background(0);
  x = mouseX; //setting x to horizontal mouse position//
  y = mouseY; //setting y to vertical mouse position//
  image(img, 0, 0); //image position//
  var c = get(x, y);
  fill(c);

  ellipse(x, y, 60, 60); //drawing a circle//
}
