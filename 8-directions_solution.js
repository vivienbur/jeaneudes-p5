// position de départ
let x = 40;
let y = 30;

// on initialise les directions sur les deux axes (x et y): vers la droite et vers le bas
let direction_x = 1;
let direction_y = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  background("white");

  // si on dépasse les limites du canvas, on inverse les directions
  if (x > width) {
    direction_x = -1;
  } else if (x < 0) {
    direction_x = 1;
  }

  if (y > height) {
      direction_y = -1;
  } else if (y < 0) {
      direction_y = 1;
  }

  // on met à jour les coordonnées du cercle avec les directions
  x = x + direction_x;
  y = y + direction_y;

  // on dessine le cercle selon ses coordonnées
  circle(x, y, 50);

}

