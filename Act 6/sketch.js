//Act-6 (Typography)
//assigning the text message//
let message = "Bad Decisions make \nGood stories"; //using \n to break the line into two sentences//
let posX, posY;
let star = []; //assigning an array for the stars//

function setup() {
  createCanvas(1000, 1000); //creating a canvas of 1000 by 1000px//
  angleMode(DEGREES);
  posX = width / 2;
  posY = width / 2;

  //creating for loop to create the stars//
  for (let i = 0; i < 100; i++) {
    star.push(new Star());
  }
}

function draw() {
  background("black"); //background color//

  for (let s of star) {
    s.update();
    s.display();
  }

  fill("white"); //font color//
  textSize(40); //font size//
  textAlign(CENTER); //font alignment//

  posX = lerp(posX, mouseX, 0.05);
  posY = lerp(posY, mouseY, 0.05);

  //adding text message based on mouse hover//
  push(); //using push and pop so the function is only applied in that particular section//

  translate(posX, posY);
  rotate(map(mouseX, 0, width, -0.1, 0.1));
  text(message, 0, 0);

  pop();
}

//adding class for star to animate it//

class Star {
  constructor() {
    this.x = random(width); //assigning random postions for the stars//
    this.y = random(height);

    //assigning random sizes for the stars//
    this.size = random(1, 3);
    this.twinkle = random(100);
  }
  update() {
    this.twinkle += 0.05;
  }
  display() {
    let alpha = map(sin(this.twinkle), -1, 1, 100, 255);
    noStroke();
    fill("white");
    ellipse(this.x, this.y, this.size);
  }
}
