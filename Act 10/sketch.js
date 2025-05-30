//Activity 10 - Welcome to Bath Spa University - Interactive Art//
let circles = []; //declaring a variable to hold all the circle values//
let floatOffset = 0;
let audio; //to hold the audio//

//preload function loads the audio before//
function preload(){
  audio=loadSound('audio2.mp3')
}
function setup() {
  createCanvas(windowWidth, windowHeight); //it fills the whole window and becomes responsize i,e, if we stretch the windown screen then the output will also scale itself//
  textAlign(CENTER, CENTER); //the text gets centered//
  textSize(50); //size of the text//
  audio.loop(); //the audio keeps on playing//

  //creating 45 stars with floating animation//
  for (let i = 0; i < 45; i++) {
    circles.push({
      //positioning them at random position//
      x: random(width), //horizontal position//
      y: random(height), //vertical position//
      r: random(10, 30), //radius of the circle//
      speed: random(0.5, 2), //upward speed//
    });
  }
}

function draw() {
  background("rgb(52,0,255)"); //adding a water color background//

  noStroke(); //removing the stroke of the circles//
  fill("skyblue"); //color of the cricle (bubbles)
  for (let b of circles) {
    ellipse(b.x, b.y, b.r);
    b.y -= b.speed;
    //if circle goes up then it agn starts from bottom
    if (b.y < -b.r) b.y = height + b.r;
  }

  //adding animation to the text//
  let yOffset = sin(frameCount * 0.05) * 10;  //adjusting the speed of the bubble animation//

  stroke("black");   //adding stroke to the text//
  strokeWeight(10);  //thickness of the stroke//
  fill("#2196F3");  //text color//
  //putting the text at the center//
  text("Welcome to Bath Spa University", width / 2, height / 2 + yOffset);
}
