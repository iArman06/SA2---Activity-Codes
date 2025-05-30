//Act - 9 (Data Visualization)

//creating arrays for the top results from the survey//
let answer = [
  "Japan",
  "Historical Sites",
  "new culture",
  "Sightseeing/exploring",
  "maybe",
];

let clickedIndex = -1; //to store the bar clicked//

let count = [4, 6, 9, 6, 6]; //the count is from the survey which I have conducted among my friends and family//

function setup() {
  createCanvas(600, 500); //canvas size//
  noLoop(); //avoiding multiple drawing so noloop//
  textAlign(CENTER, CENTER); //everything gets aligned at the center//
}

function draw() {
  background("black"); //bg color//
  let max_count = max(count); //to find the highest count value for bar//

  for (i = 0; i < answer.length; i++) {
    let barHeight = map(count[i], 0, max_count, 0, height - 50);
    let x = 50 + i * 110; //the bars get spaced evenly in 110px
    let y = height - barHeight - 15;   //height so the number on top can be seen//

    if (i == clickedIndex) {
      fill("red"); //if the user clicks on the bar it will turn red//
    } else {
      fill("skyblue");
    }

    rect(x, y, 50, barHeight); //bar in the shape of rectangle//

    fill("white"); //text color//

    //the text stays below the bar//
    text(answer[i], x + 25, height - 10);
    text(count[i], x + 25, y - 25);
  }
}
//function to detect mouse clicks once the bar is clicked//
function mousePressed() {
  let max_count = max(count);
  for (let i = 0; i < answer.length; i++) {
    let barHeight = map(count[i], 0, max_count, 0, height - 100);
    let x = 50 + i * 100;
    let y = height - barHeight - 25;

    if (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + barHeight) {
      clickedIndex = i; //to store the index number of the clicked bar so it knows which bar got clicked//
      redraw(); //it will redraw the screen to show the red color//
      break; //code breaks once the clicked bar is found//
    }
  }
}
