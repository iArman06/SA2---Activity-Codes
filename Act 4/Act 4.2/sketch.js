//Act 4 - (Work with Images) - Pointillism Effect//

var img,x,y
function preload(){  //loading the img before program starts//
  
  img= loadImage("img2.jpeg");
}

function setup() {
  createCanvas(400,400);  //canvas size//
  background('black');  //bg color//
  noStroke();  //removing the stroke//
}

function draw() {
  x = random(width);  //random x position//
  y = random(width);  //random y position//
  
  var c= img.get(x,y);
  fill(c[0],c[1],c[2],50);
  ellipse(x,y,40,40);  //ellipe size for the effect//
}