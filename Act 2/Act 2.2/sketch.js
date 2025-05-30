//Act-2 (object name - Colorization and Animation) -  Animation//

let carX = 0;  //car initial postion//
function setup() {
  createCanvas(400, 400); //size of canvas//
  noStroke(); //removing stroke//
}

function draw() {
  background(220); //adding a light grey color as bg//

  ellipse(0, 0, 80, 80);

  //road for the car//
  fill("black");
  rect(0, 220, 400, 100);

  fill("white");
  rect(10, 270, 80, 10);
  rect(150, 270, 80, 10);
  rect(290, 270, 80, 10);

 

  //making the car body//
  fill(100, 0, 0); //car body color//
  rect(100 + carX, 200, 200, 60); //base rectangle//
  rect(140 + carX, 160, 120, 60);

  //car window//
  fill(0, 0, 255);
  rect(200 + carX, 170, 50, 30); //front window//
  rect(150 + carX, 170, 40, 30); //back window//

  //adding wheels for the car//
  fill(0);
  ellipse(250 + carX, 240, 40, 40); //front wheel//
  ellipse(130 + carX, 240, 40, 40); //back wheel//

  fill("grey");
  ellipse(130 + carX, 240, 20, 20);
  ellipse(250 + carX, 240, 20, 20);

  //car lights//
  fill("yellow");
  rect(275 + carX, 210, 20, 10);

  //making footpath//
  //using push and pop to add effects only to a particular area//
  push();
  stroke(0);
  strokeWeight(4);
  fill("rgb(78,78,78)");
  rect(0, 320, 80, 20);
  rect(160, 320, 80, 20);
  rect(320, 320, 80, 20);

  fill("white");
  rect(80, 320, 80, 20);
  rect(240, 320, 80, 20);

  fill("#F13B01");
  rect(0, 340, 100, 20);
  rect(100, 340, 100, 20);
  rect(200, 340, 100, 20);
  rect(300, 340, 100, 20);
  rect(400, 340, 100, 20);

  rect(0, 360, 60, 20);
  rect(60, 360, 100, 20);
  rect(140, 360, 100, 20);
  rect(240, 360, 100, 20);
  rect(340, 360, 100, 20);

  rect(0, 380, 100, 20);
  rect(100, 380, 100, 20);
  rect(200, 380, 100, 20);
  rect(300, 380, 100, 20);
  rect(400, 380, 100, 20);
  pop();
  
  //the car postion gets update when the program runs//
  carX+=2;
  //the car keeps moving in loop giving it a infinite effect//
  if(carX > width){
    carX = -300;
  }
}
