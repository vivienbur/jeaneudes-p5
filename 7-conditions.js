let x = 40;
let y = 30;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  background("white");

  if (x > width) {
    x = 0;
  }

  if (y > height) {
    y = 0;
  }

  circle(x, y, 50);

  x = x + 1;
  y = y + 1;

  // question: comment faire pour que la balle rebondisse contre les bords du canvas?

}

