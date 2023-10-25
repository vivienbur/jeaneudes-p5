
function setup() {
  createCanvas(600, 400);
}

function draw() {

  background("grey");

  // Dessiner le corps
  // strokeWeight(0);
  fill(255, 0, 0);
  ellipse(200, 200, 100, 100);

  // Dessiner la tête
  fill(255);
  ellipse(200, 120, 60, 60);

  // Dessiner les yeux
  fill(0);
  ellipse(180, 110, 10, 10);
  ellipse(220, 110, 10, 10);

  // Dessiner la bouche
  arc(200, 130, 40, 20, 0, PI);
  
  // Dessiner les bras
  // strokeWeight(4);
  line(160, 200, 100, 250);
  line(240, 200, 300, 250);

  // Dessiner les jambes
  line(200, 250, 150, 300);
  line(200, 250, 250, 300);
}

