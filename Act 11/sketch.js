//Act 11 - (Individual) Interactive Art//

//we are making a emotional builder where on presseing some keys, it will trigger a visual and atmospheric transformation//

//H = Happy//
//S = Sad//h
//A = Angry//
//C = Calm//
//L = Confused//

let mood = "none"; //we set the mood to none so the effect doesn't start right up//
function setup() {
  createCanvas(500, 500); //canvas size//
}

function draw() {
  if (mood === "none") {
    //if mode is at none then it will stay on the intro//
    drawIntro();
  } else {
    drawMood(); //if a mode is selected then it will draw acc. to mode selected//
    drawButton(); //to draw a previous button to go back to intro//
  }
}

function drawIntro() {
  background("white"); //intro page bg//
  fill("black"); //text color to black//
  textSize(20); //size of the text//

  //centering the text in the middle of the screen//
  textAlign(CENTER, CENTER);

  text(
    "Welcome to the Emotional Interface,\n a place where you can choose your mood\n\n" +
      "Choose your mood: \n\n" +
      "H - Happy\n S - Sad\n A - Angry\n C - Calm\n L - Confused",
    width / 2,
    height / 2
  );
}

//adding a fucntion to draw the visuals based on the mode selected//
function drawMood() {
  if (mood === "happy") {
    drawHappy();
  } else if (mood === "sad") {
    drawSad();
  } else if (mood === "angry") {
    drawAngry();
  } else if (mood === "calm") {
    drawCalm();
  } else if (mood === "confuse") {
    drawConfuse();
  }

  drawSelect();
}

//adding a function so whenever a key is pressed the visuals will appear//
//assigning the key to the corresponding emotions//
function keyPressed() {
  let k = key.toUpperCase();
  if (k === "H") mood = "happy";
  //if H is pressed then happy mode//
  else if (k === "S") mood = "sad";
  //if S then sad//
  else if (k === "A") mood = "angry";
  //if A then angry//
  else if (k === "C") mood = "calm";
  //if C then calm//
  else if (k === "L") mood = "confuse"; //if L then confused mood//
}

//now we will build function for each respective mood//

//function for happy mood visual//
function drawHappy() {
  background("#FFC107"); //bg color to yellow//
  fill("rgb(89,89,1)");

  //50 random circles will be scattered//
  for (let i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 10, 10);
  }
}

//function for Sad mood visual//
function drawSad() {
  background("rgb(57,57,140)"); //dark blue bg//
  stroke(300); //adding a stroke for the line to be visible//

  //100 vertical lines to simulate rain drops//
  for (let i = 0; i <= 100; i++) {
    let x = random(width);
    let y = random(height);
    line(x, y, x, y + 10); //using line to draw drops//
  }
}

//function for Angry mood visual//
function drawAngry() {
  background("rgb(109,9,9)"); //bg to dark red//
  stroke(100); //adding a stroke for the lines//
  strokeWeight(3); //making the stroke thick//

  //15 lines positioned at random places to represent anger slashes//
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    line(x, y, x + random(-25, 25), y + random(30, 60));
  }
}

//function for calm mood visual//
function drawCalm() {
  background("skyblue"); //sky blue bg//
  fill("white"); //to color the shapes white//
  noStroke(); //removing stroke//

  //20 circles will rotate in smooth circular way//
  for (let i = 0; i < 20; i++) {
    let x = width / 2 + sin(frameCount + 0.01 + i) * 100;
    let y = height / 2 + cos(frameCount + 0.01 + i) * 100;

    ellipse(x, y, 20, 20); //using ellipse for the circle//
  }
}

//function for confused mood visual//
function drawConfuse() {
  background("rgb(131,81,131)"); //purplish type bg//
  stroke(200); //adding a stroke//
  stroke(5);

  //10 expanding circles//
  for (let i = 0; i < 10; i++) {
    let r = (frameCount % 360) + i * 10;
    ellipse(width / 2, height / 2, r, r);
  }
}

//adding a function for a box to appear on the bottom of the screen displaying the mood selected//
function drawSelect() {
  fill(0);
  noStroke(); //removing stroke border//
  rect(0, height - 40, width, 40);
  fill("white"); //text color//
  textSize(25); //text size//
  textAlign(CENTER, CENTER); //texts positioned at the center//

  //to show the mood selected in upper case//
  text("You Mood right now: " + mood.toUpperCase(), width / 2, height - 20);
}

//function to add a clickable back button//
function drawButton() {
  fill("black"); //black bg for the button//
  rect(10, 10, 80, 30, 10); //rectangle shape for the button with curved border corners//
  fill("white"); //font color inside the box//
  textSize(16); //text size//
  textAlign(CENTER, CENTER); //aligning text at center insider the button//
  text("Previous", 10 + 40, 10 + 15);
}

//adding function so it runs when mouse gets clicked anywhere//
function mousePressed() {
  //if mouse gets clicked inside the "back" button area then it will reset the mood to none and again show the intro page//
  if (mouseX > 10 && mouseX < 90 && mouseY > 10 && mouseY < 40) {
    mood = "none";
  }
}
