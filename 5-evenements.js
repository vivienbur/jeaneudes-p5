
function setup() {
  createCanvas(600, 400);

  background("white");
}

function draw() {
  noStroke();
  
  fill(250, 200, 200, 50);
  
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 20, 20);
}