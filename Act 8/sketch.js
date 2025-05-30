//Act 8 - Audio Visualization//

let sound;  //to store sound//
let amp; //declared variable to store amplitude//

//using preload so the audio gets loaded and it runs before function setup()//
function preload(){
  sound = loadSound('audio1.mp3'); //audio file//
}

function setup(){
  createCanvas(800,600);  //canvas size//
  sound.loop();  //the audio never stops and keeps on playig//
  amp = new p5.Amplitude();
}

function draw(){
  background('black');  //bg color//
  
  //drawing circles at random position in bg for design//
  //using loop//
  for(let i=0; i<10; i++){
    fill('#FFEB3B')  //cricle color in bg//
    let x=random(width);  //a random x coordinate gets generated for width//
    let y=random(height);  //a random y coordinate gets generated for height//
    
    //drawing a 15x15 circle//
    ellipse(x,y,15,15)
  }
  
  //it gets the volume level of the audio using amplitude//
  let level = amp.getLevel();
  
  //according to the volume the circle gets smaller and bigger i.e, (more sound = bigger circle)//
  let size = map(level, 0,1,50,300);
  
  //using push() and pop() as I am adding stroke to the main circle//
  push();
  fill('pink');  //color of the visualizer//

  stroke('rgb(238,104,104)');
  strokeWeight(10);  //thickness of the stroke//
  ellipse(width/2,height/2,size);  //centering the main circle to center//
  pop();
}