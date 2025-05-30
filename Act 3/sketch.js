//Act-3 (Alien)
//Creating Canvas//
function setup() {
  createCanvas(400, 400); //size of canvas//
  noStroke(); //removing stroke//

  angleMode(DEGREES); //setting the angle mode to degree//
}

function draw() {
  background("#000000"); //adding a color to bg//
  //using push and pop so the effect doesnt effect other functions//

  //making alien planet on which the alien will stand//
  fill("#795548");

  translate(15, 15); //adjusting the position of the alien//
  scale(1.0); //we can ajust the size of the art using this//
  rotate(-2); //adjusting the angle of the art using this function//

  beginShape();
  
  vertex(0, 400);
  bezierVertex(100, 350, 250, 350, 400, 400);
  
  endShape();

  //drawing alien//
  beginShape();

  fill("green");
  ellipse(200, 200, 120, 70);

  rect(210, 130, 15, 50);
  rect(170, 130, 15, 50);

  //making the eyes of the alien//
  fill("black");
  ellipse(170, 190, 30, 20);
  ellipse(220, 190, 30, 20);

  fill("white");
  ellipse(170, 190, 5, 10);
  ellipse(220, 190, 5, 10);

  //left and right antenna ball//
  fill("yellow");
  ellipse(175, 120, 30, 30);
  ellipse(220, 120, 30, 30);
  
  endShape();

  //rest of alien body//
  beginShape();
  
  vertex(150, 250);
  bezierVertex(170, 300, 230, 300, 250, 250);
  
  endShape();

  fill("green");
  rect(210, 220, 15, 40);
  rect(170, 220, 15, 40);

  //using push and pop so the extra modifications stays inside the it//
  push();
  
  stroke(0);
  strokeWeight(3);
  fill("green");
  ellipse(175, 260, 20, 20);
  ellipse(220, 260, 20, 20);
  
  pop();

  fill("black");
  rect(170, 210, 50, 10);

  push();
  
  stroke(0);
  strokeWeight(3);
  fill("yellow");
  rect(155, 275, 90, 20);
  rect(155, 295, 90, 20);
  rect(155, 315, 90, 20);
  rect(155, 335, 90, 20);
  
  pop();

  fill("green");
  rect(190, 285, 20, 60);

  //right leg part//
  rect(190, 285, 80, 20);
  rect(260, 285, 20, 90);

  //left leg part//
  rect(120, 285, 80, 20);
  rect(120, 285, 20, 90);

  fill("yellow");
  ellipse(130, 380, 30, 30);
  ellipse(270, 380, 30, 30);

  //making the background//
  fill("white");
  ellipse(0, 0, 100, 100);
  ellipse(360, 120, 50, 50);
  ellipse(60, 200, 30, 30);
  ellipse(390, 90, 15, 15);
  ellipse(260, 90, 10, 10);

  fill("rgb(255,212,104)");
  ellipse(320, 300, 60, 60);
  ellipse(160, 60, 30, 30);
  ellipse(100, 260, 10, 10);
  ellipse(290, 260, 15, 15);
  ellipse(290, 50, 20, 20);
  ellipse(60, 120, 15, 15);
  ellipse(60, 320, 15, 15);
}
