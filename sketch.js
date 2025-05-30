//Act-1 (Car)
//Creating Canvas//
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

  //making buildings behind the car//
  fill("rgb(141,141,141)");
  rect(60, 70, 100, 150); //building behind - 1//
  rect(190, 50, 100, 170); //building behind - 2//
  rect(310, 90, 100, 130); //building behind - 3//

  fill("rgb(63,60,60)");
  rect(10, 50, 100, 170); //building 1//
  rect(120, 90, 100, 120); //building 2//
  rect(230, 70, 100, 150); //building 3//
  rect(340, 110, 100, 110); //building 4//

  //building lights//
  push()
  stroke(0);
  strokeWeight(2);
  fill("#FFD968");
  rect(20, 70, 30, 30);
  rect(70, 70, 30, 30);
  rect(20, 120, 30, 30);
  rect(70, 120, 30, 30);
  rect(20, 170, 30, 30);
  rect(70, 170, 30, 30);

  fill("skyblue");
  rect(240, 80, 80, 20);
  rect(240, 110, 80, 20);
  rect(240, 140, 80, 20);
  rect(240, 170, 80, 20);

  rect(130, 100, 80, 20);
  rect(130, 130, 80, 20);
  rect(130, 160, 80, 20);

  fill("#FFD968");
  rect(360, 120, 30, 30);
  rect(360, 150, 30, 30);
  rect(360, 180, 30, 30);
  pop()

  //making the car body//
  fill(100, 0, 0); //car body color//
  rect(100, 200, 200, 60); //base rectangle//
  rect(140, 160, 120, 60);

  //car window//
  fill(0, 0, 255);
  rect(200, 170, 50, 30); //front window//
  rect(150, 170, 40, 30); //back window//

  //adding wheels for the car//
  fill(0);
  ellipse(250, 240, 40, 40); //front wheel//
  ellipse(130, 240, 40, 40); //back wheel//

  fill("grey");
  ellipse(130, 240, 20, 20);
  ellipse(250, 240, 20, 20);

  //car lights//
  fill("yellow");
  rect(275, 210, 20, 10);

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
}
