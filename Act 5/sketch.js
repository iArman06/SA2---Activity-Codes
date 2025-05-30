//Act-5 (Pattern)//

function setup() {
  createCanvas(400, 400); //canvas size//
  loop();  //the drawing loops creating the visually appealing effect//
  background("black"); //background color//

  noStroke(); //removing the stroke//
}

function draw() {
  for (let x = 0; x < width; x += 40) 
  {
    for (let y = 0; y < height; y += 40) 
    {
      let size = random(40.4); //adding size//
      let r = random(100, 300); //putting a random red color value//
      let g = random(100, 300); //putting a random green color value//
      let b = random(100, 300); //putting a random blue color value//

      fill(r, g, b);  //adding the color//
      ellipse(x + 20, y + 20, size); //adding the circles//
    }
  }
}
