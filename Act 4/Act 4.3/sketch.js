//Act - 4 (Work with Images) - Posterize Effect//
var img;
function preload(){  //loading the img before program starts//
  
  img= loadImage("img3.jpeg");
}

function setup() {
  createCanvas(600, 600);  //Canvas size//
  background('black');  //bg color//
  
}

function draw() {
  background(0);
  image(img,0,0); //position of the img in the canvas//
  var v = map(mouseX,0,width,2,20);
  filter (POSTERIZE, v); //v is the number of color level which will be used to posterize//
}