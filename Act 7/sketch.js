//Act-7 (Mouse Trails)//

function setup() {
  createCanvas(400, 400); //canvas size//
  background("black"); //bg color//
  strokeWeight(2); //adding stroke//
}

function draw() {
  if (mouseIsPressed) {
    stroke("white");
    //if mouse hovers, white color circle will start to trail behind//
  }

  ellipse(mouseX - 50, mouseY, 25, 25); //adding cricle left side of mouse//
  ellipse(mouseX, mouseY - 50, 25, 25); //adding cricle above mouse
}
